import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseDB } from '../api/firebaseApp';
import { get, ref, set } from 'firebase/database';

const PATH = '/salaryAdjustments/sajo1234567';
const dbRef = ref(firebaseDB, PATH);

const salaryAdSlice = createSlice({
  name: 'salaryAd',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  } as SalaryAdState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalaryAdData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSalaryAdData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSalaryAdData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'error: extraReducers fetch 실패';
      })
      .addCase(deleteSalaryAdData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteSalaryAdData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(deleteSalaryAdData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'error: extraReducers delete 실패';
      });
  },
});

export const fetchSalaryAdData = createAsyncThunk('salaryAd/fetchSalaryAdData', async () => {
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val() as Data[];
    } else {
      return [];
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'fetch 실패');
  }
});

export const deleteSalaryAdData = createAsyncThunk(
  'salaryAd/deleteSalaryAdData',
  async (id: string) => {
    const snapshot = await get(ref(firebaseDB, PATH));
    const state = snapshot.val() as Data[];
    const updated = state.filter((item) => item.id !== id);
    try {
      await set(dbRef, updated);
      return updated;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'delete 실패');
    }
  }
);

interface Data {
  id: string;
  category: '주말 / 공휴일 근무 수당' | '야간 근무 수당(22:00-06:00)' | '연차 누락' | '경비 처리';
  description: string;
  endTime: string;
  month: string;
  requestTime: string;
  startTime: string;
  status: '결재대기' | '결재완료' | '반려';
}

export interface SalaryAdState {
  data: Data[] | [];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  error: string | null;
}

// export const { addItem, delItem } = salaryAdSlice.actions;
export default salaryAdSlice.reducer;
