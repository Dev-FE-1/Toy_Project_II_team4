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
      state.schedules.push(action.payload);
    },
  },
});

export const { setSchedules, addSchedule } = scheduleSlice.actions;
export default scheduleSlice.reducer;
