import SelectBox from '../../components/selectBox/SelectBox';
import { TextField, SelectChangeEvent } from '@mui/material';
import Cate1 from './Cate1';
import Cate2 from './Cate2';
import Cate3 from './Cate3';
import Cate4 from './Cate4';
import { useState } from 'react';
const month = '[03월 급여명세서]';
const menuItems = [
  { text: '주말 / 공휴일 근무 수당', value: 'cate1' },
  { text: '야간 근무 수당(22:00-06:00)', value: 'cate2' },
  { text: '연차 누락', value: 'cate3' },
  { text: '경비 처리', value: 'cate4' },
];
const title = {
  cate1: '주말 / 공휴일 근무 수당 신청',
  cate2: '야간 근무 수당 신청',
  cate3: '연차 누락',
  cate4: '경비 처리',
};
function FormWrap() {
  const [selected, setselected] = useState<SelectedType>('cate1');
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setselected(event.target.value as SelectedType);
  };
  return (
    <>
      <SelectBox
        labelId="labelCate"
        id="cate"
        label="카테고리"
        menuItems={menuItems}
        sx={{ marginBottom: '20px' }}
        value={selected}
        onChange={handleChange}
      />
      <TextField
        label="제목"
        fullWidth
        sx={{ mb: '2rem' }}
        InputProps={{
          readOnly: true,
        }}
        value={`${month} ${title[selected]}`}
      />
      {selected === 'cate1' && <Cate1 />}
      {selected === 'cate2' && <Cate2 />}
      {selected === 'cate3' && <Cate3 />}
      {selected === 'cate4' && <Cate4 />}
      <TextField label="내용" multiline rows={4} fullWidth sx={{ m: '2rem 0' }} />
    </>
  );
}

type SelectedType = 'cate1' | 'cate2' | 'cate3' | 'cate4';
export default FormWrap;
