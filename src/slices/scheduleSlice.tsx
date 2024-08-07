import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseDB } from '../api/firebaseApp';
import { get, ref, set } from 'firebase/database';

const PATH = '/schedules/sajo1234567';
const dbRef = ref(firebaseDB, PATH);

export interface ISchedule {
  dateId: number;
  category: string;
  scheduleType: 'company' | 'personal';
  description: string;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

export interface ScheduleState {
  schedules: ISchedule[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ScheduleState = {
  schedules: [],
  status: 'idle',
  error: null,
};

export const scheduleSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchedules.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSchedules.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.schedules = action.payload;
      })
      .addCase(fetchSchedules.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed To Fetch!';
      })
      .addCase(addSchedule.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.schedules = action.payload;
      })
      .addCase(updateSchedule.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.schedules = action.payload;
      })
      .addCase(deleteSchedule.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.schedules = action.payload;
      });
  },
});

export const fetchSchedules = createAsyncThunk('schedules/fetchSchedules', async () => {
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val() as ISchedule[];
    } else {
      return [];
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Fetch schedules failed');
  }
});

export const addSchedule = createAsyncThunk(
  'schedules/addSchedule',
  async (newSchedule: ISchedule) => {
    try {
      const snapshot = await get(dbRef);
      const schedules = snapshot.exists() ? (snapshot.val() as ISchedule[]) : [];
      const updatedSchedules = [...schedules, newSchedule];
      await set(dbRef, updatedSchedules);
      return updatedSchedules;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Add schedule failed');
    }
  }
);

export const updateSchedule = createAsyncThunk(
  'schedules/updateSchedule',
  async (updatedSchedule: ISchedule) => {
    try {
      const snapshot = await get(dbRef);
      const schedules = snapshot.exists() ? (snapshot.val() as ISchedule[]) : [];
      const updatedSchedules = schedules.map((schedule) =>
        schedule.dateId === updatedSchedule.dateId ? updatedSchedule : schedule
      );
      await set(dbRef, updatedSchedules);
      return updatedSchedules;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Update schedule failed');
    }
  }
);

export const deleteSchedule = createAsyncThunk(
  'schedules/deleteSchedule',
  async (dateId: number) => {
    try {
      const snapshot = await get(dbRef);
      const schedules = snapshot.exists() ? (snapshot.val() as ISchedule[]) : [];
      const updatedSchedules = schedules.filter((schedule) => schedule.dateId !== dateId);
      await set(dbRef, updatedSchedules);
      return updatedSchedules;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Delete schedule failed');
    }
  }
);

export default scheduleSlice.reducer;
