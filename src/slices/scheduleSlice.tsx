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

const convertToArray = (data: any | null): ISchedule[] => {
  if (typeof data !== 'object' || data === null) return [];
  if (Array.isArray(data)) return data;
  if (typeof data === 'object') return Object.values(data);
  return [];
};

export const fetchSchedules = createAsyncThunk('schedules/fetchSchedules', async () => {
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return convertToArray(snapshot.val());
    } else {
      return [];
    }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Fetch schedules failed');
  }
});

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
        state.error = action.payload as string;
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

export default scheduleSlice.reducer;
