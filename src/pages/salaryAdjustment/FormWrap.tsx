import SelectBox from '../../components/selectBox/SelectBox';
import Btn from '../../components/button/Button';
import { TextField, SelectChangeEvent } from '@mui/material';
import Cate1 from './Cate1';
import Cate2 from './Cate2';
import { useState } from 'react';
import { Form } from 'react-router-dom';

import getCurrentDate from '../../utils/getCurrentDate';
import { addSalaryAdData, Category, Data } from '../../slices/salaryAdSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

const MONTH = '2024-07';
const menuItems = [
  { text: '주말 / 공휴일 근무 수당', value: '주말 / 공휴일 근무 수당' },
  { text: '야간 근무 수당(22:00-06:00)', value: '야간 근무 수당(22:00-06:00)' },
  { text: '연차 누락', value: '연차 누락' },
  { text: '경비 처리', value: '경비 처리' },
];

function FormWrap({ handleClose }: FormWrapProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [selected, setselected] = useState<SelectedType>('주말 / 공휴일 근무 수당');
  const handleChange = (e: SelectChangeEvent<string | number | HTMLSelectElement>) => {
    setselected(e.target.value as SelectedType);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const category = formData.get('category') as Category;
    const sDate = formData.get('sDate') as string;
    const description = (formData.get('description') as string) || '';
    let startTime = '';
    let endTime = '';

    if (!category) {
      alert('카테고리가 선택되지 않았습니다.');
      return;
    }

    if (!sDate) {
      alert('날짜를 입력해주세요.');
      return;
    }

    if (category === '야간 근무 수당(22:00-06:00)') {
      const sTime = formData.get('sTime') as string;
      const eTime = formData.get('eTime') as string;
      if (!sTime) {
        alert('시작시간을 입력해주세요.');
        return;
      }
      if (!eTime) {
        alert('종료시간을 입력해주세요.');
        return;
      }
      startTime = `${sDate} ${sTime}`;
      endTime = `${sDate} ${eTime}`;
    } else {
      const eDate = formData.get('eDate') as string;
      if (!eDate) {
        alert('종료일을 입력해주세요.');
        return;
      }
      startTime = `${sDate} 09:00`;
      endTime = `${eDate} 18:00`;
    }

    const submitData: Data = {
      id: '',
      category,
      description,
      startTime,
      endTime,
      status: '결재대기',
      month: MONTH,
      requestTime: getCurrentDate(),
    };

    dispatch(addSalaryAdData(submitData))
      .unwrap()
      .then((result) => {
        if (result) {
          alert('신청이 완료되었습니다.');
          handleClose();
        }
      })
      .catch((error) => {
        alert(`예기치 못한 오류가 발생했습니다. \n ${error}`);
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      <SelectBox
        labelId="labelCate"
        id="category"
        label="카테고리"
        menuItems={menuItems}
        sx={{ marginBottom: '20px' }}
        value={selected}
        onChange={handleChange}
        name="category"
        MenuProps={{
          PaperProps: {
            sx: {
              '& .MuiMenuItem-root': {
                fontSize: 'var(--font-size-small)',
              },
            },
          },
        }}
      />
      <TextField
        label="제목"
        fullWidth
        sx={{ mb: '2rem' }}
        InputProps={{
          readOnly: true,
        }}
        value={`[${MONTH.split('-')[1]}월 급여명세서] ${selected}`}
        name="title"
        id="title"
      />

      {selected === '야간 근무 수당(22:00-06:00)' ? <Cate2 /> : <Cate1 />}

      <TextField
        label="내용"
        multiline
        rows={4}
        fullWidth
        sx={{ m: '2rem 0' }}
        name="description"
        id="description"
      />

      <div className="modal-btnArea">
        <Btn
          label="취소"
          btnsize="sm"
          sx={{ fontSize: '1.5rem', mr: '1rem' }}
          btntype="outlined"
          onClick={() => handleClose()}
        />
        <Btn type="submit" label="확인" btnsize="md" sx={{ fontSize: '1.5rem' }} />
      </div>
    </Form>
  );
}

type SelectedType =
  | '주말 / 공휴일 근무 수당'
  | '야간 근무 수당(22:00-06:00)'
  | '연차 누락'
  | '경비 처리';

export default FormWrap;

interface FormWrapProps {
  handleClose: () => void;
}
