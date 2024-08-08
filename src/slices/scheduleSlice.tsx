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

const handleFirebaseError = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return '';
};

export const fetchSchedules = createAsyncThunk<ISchedule[], void, { rejectValue: string }>(
  'schedules/fetchSchedules',
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await get(dbRef);
      return snapshot.exists() ? (snapshot.val() as ISchedule[]) : [];
    } catch (error) {
      return rejectWithValue(handleFirebaseError(error));
    }
  }
);

export const addSchedule = createAsyncThunk<ISchedule[], ISchedule, { rejectValue: string }>(
  'schedules/addSchedule',
  async (newSchedule, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { schedules: ScheduleState };
      const updatedSchedules = [...state.schedules.schedules, newSchedule];
      await set(dbRef, updatedSchedules);
      return updatedSchedules;
    } catch (error) {
      return rejectWithValue(handleFirebaseError(error));
    }
  }
);

export const updateSchedule = createAsyncThunk<ISchedule[], ISchedule, { rejectValue: string }>(
  'schedules/updateSchedule',
  async (updatedSchedule, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { schedules: ScheduleState };
      const updatedSchedules = state.schedules.schedules.map((schedule) =>
        schedule.dateId === updatedSchedule.dateId ? updatedSchedule : schedule
      );
      await set(dbRef, updatedSchedules);
      return updatedSchedules;
    } catch (error) {
      return rejectWithValue(handleFirebaseError(error));
    }
  }
);

export const deleteSchedule = createAsyncThunk<ISchedule[], number, { rejectValue: string }>(
  'schedules/deleteSchedule',
  async (dateId, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { schedules: ScheduleState };
      const updatedSchedules = state.schedules.schedules.filter(
        (schedule) => schedule.dateId !== dateId
      );
      await set(dbRef, updatedSchedules);
      return updatedSchedules;
    } catch (error) {
      return rejectWithValue(handleFirebaseError(error));
    }
  }
);

export const scheduleSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
  },
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
        state.error = action.payload || '스케줄을 가져오는데 실패했습니다';
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

export const { resetStatus } = scheduleSlice.actions;
export const fetchSchedules = createAsyncThunk('schedules/fetchSchedules', async () => {
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return isObjectConvertToArray(snapshot.val());
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
