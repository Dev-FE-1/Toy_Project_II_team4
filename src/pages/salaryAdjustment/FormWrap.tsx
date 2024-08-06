import SelectBox from '../../components/selectBox/SelectBox';
import Btn from '../../components/button/Button';
import { TextField, SelectChangeEvent } from '@mui/material';
import Cate1 from './Cate1';
import Cate2 from './Cate2';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import { useBasicModal } from '../../components/modal/useBasicModal';
import getCurrentDate from '../../utils/getCurrentDate';

const MONTH = '2024-07';
const menuItems = [
  { text: '주말 / 공휴일 근무 수당', value: '주말 / 공휴일 근무 수당' },
  { text: '야간 근무 수당(22:00-06:00)', value: '야간 근무 수당(22:00-06:00)' },
  { text: '연차 누락', value: '연차 누락' },
  { text: '경비 처리', value: '경비 처리' },
];

function FormWrap() {
  const { handleClose } = useBasicModal();
  const [selected, setselected] = useState<SelectedType>('주말 / 공휴일 근무 수당');
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setselected(event.target.value as SelectedType);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const category = formData.get('category');
    const sDate = formData.get('sDate') as string;
    const description = formData.get('description') || '';
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

    const submitData = {
      category,
      description,
      startTime,
      endTime,
      status: '결재대기',
      month: MONTH,
      requestTime: getCurrentDate(),
    };

    alert('신청이 완료되었습니다.');
    console.log(submitData);
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
          onClick={handleClose}
          sx={{ fontSize: '1.5rem', mr: '1rem' }}
          btntype="outlined"
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
