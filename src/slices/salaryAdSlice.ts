import { createSlice } from '@reduxjs/toolkit';

const datas = [
  {
    title: '04월 급여명세서/경비누락',
    details: { date: '2024.04.25', state: '결재대기', note: '비고', reason: '반려사유 입니다.' },
  },
  {
    title: '03월 급여명세서/경비누락',
    details: { date: '2024.03.25', state: '결재완료', note: '비고', reason: '반려사유 입니다.' },
  },
  {
    title: '02월 급여명세서/경비누락',
    details: { date: '2024.02.25', state: '반려', note: '비고', reason: '반려사유 입니다.' },
  },
  {
    title: '01월 급여명세서/경비누락',
    details: { date: '2024.01.25', state: '결재완료', note: '비고', reason: '반려사유 입니다.' },
  },
];

const initialState = datas;

export const salaryAdSlice = createSlice({
  name: 'salaryAd',
  initialState,
  reducers: {
    addItem: (state) => {
      state;
    },
    delItem: (state) => {
      state;
    },
  },
});

export const { addItem, delItem } = salaryAdSlice.actions;
export default salaryAdSlice.reducer;
