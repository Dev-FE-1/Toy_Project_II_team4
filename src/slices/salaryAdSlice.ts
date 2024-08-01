import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Data {
  title: string;
  details: {
    id: string;
    date: string;
    state: string;
    note: string;
    reason: string;
  };
}
const datas = [
  {
    title: '04월 급여명세서/경비누락',
    details: {
      id: '4',
      date: '2024.04.25',
      state: '결재대기',
      note: '비고',
      reason: '반려사유 입니다.',
    },
  },
  {
    title: '03월 급여명세서/경비누락',
    details: {
      id: '3',
      date: '2024.03.25',
      state: '결재완료',
      note: '비고',
      reason: '반려사유 입니다.',
    },
  },
  {
    title: '02월 급여명세서/경비누락',
    details: {
      id: '2',
      date: '2024.02.25',
      state: '반려',
      note: '비고',
      reason: '반려사유 입니다.',
    },
  },
  {
    title: '01월 급여명세서/경비누락',
    details: {
      id: '1',
      date: '2024.01.25',
      state: '결재완료',
      note: '비고',
      reason: '반려사유 입니다.',
    },
  },
];

const initialState = datas;

export const salaryAdSlice = createSlice({
  name: 'salaryAd',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Data>) => {
      state.push(action.payload);
    },
    delItem: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.details.id !== action.payload);
    },
  },
});

export const { addItem, delItem } = salaryAdSlice.actions;
export default salaryAdSlice.reducer;
