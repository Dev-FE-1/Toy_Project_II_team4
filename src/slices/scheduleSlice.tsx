import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
}

const initialState: ScheduleState = {
  schedules: [],
};

export const scheduleSlice = createSlice({
  name: 'schedules',
  initialState,
  reducers: {
    setSchedules: (state, action: PayloadAction<ISchedule[]>) => {
      state.schedules = action.payload;
    },
    addSchedule: (state, action: PayloadAction<ISchedule>) => {
      state.schedules = [...state.schedules, action.payload];
    },
    updateSchedule: (state, action: PayloadAction<ISchedule>) => {
      const scheduleIndex = state.schedules.findIndex(
        (schedule) => schedule.dateId === action.payload.dateId
      );
      if (scheduleIndex !== -1) {
        state.schedules[scheduleIndex] = action.payload;
      }
    },
    deleteSchedule: (state, action: PayloadAction<number>) => {
      state.schedules = state.schedules.filter((schedule) => schedule.dateId !== action.payload);
    },
  },
});

export const { setSchedules, addSchedule, updateSchedule, deleteSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;
