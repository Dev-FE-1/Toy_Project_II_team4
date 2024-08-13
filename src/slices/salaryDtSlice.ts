import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ref, get } from 'firebase/database';
import { firebaseDB } from '../api/firebaseApp';

export interface SalaryDetailItem {
  label: string;
  value: string;
  type?: 'main' | 'sub';
  content?: string;
}

export interface SalaryDataItem {
  id: number;
  realpay: string;
  payday: string;
  state: boolean;
  title: string;
  level: string;
  work: string;
  details: SalaryDetailItem[];
}

export interface EmployeeProfile {
  name?: string;
}

export interface SalaryDetails {
  [userId: string]: SalaryDataItem[];
}

export interface Employees {
  [userId: string]: {
    profile: EmployeeProfile;
  };
}

export interface SalaryDtState {
  salaryDetails: SalaryDetails;
  employees: Employees;
  status: 'idle' | 'loading' | 'succeed' | 'failed';
  error: string | null;
}

const initialState: SalaryDtState = {
  salaryDetails: {} as SalaryDetails,
  employees: {} as Employees,
  status: 'idle',
  error: null,
};

export const fetchSalaryDetails = createAsyncThunk('salaryDt/fetchSalaryDetails', async () => {
  try {
    const salaryDetailsRef = ref(firebaseDB, 'salaryDetails');
    const employeesRef = ref(firebaseDB, 'employees');

    const [employeesSnapshot, salaryDetailsSnapshot] = await Promise.all([
      get(employeesRef),
      get(salaryDetailsRef),
    ]);

    const salaryDetails = salaryDetailsSnapshot.exists()
      ? (salaryDetailsSnapshot.val() as SalaryDetails)
      : {};

    const employees = employeesSnapshot.exists() ? (employeesSnapshot.val() as Employees) : {};
    return {
      salaryDetails,
      employees,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      salaryDetails: {},
      employees: {},
    };
  }
});

export const salaryDtSlice = createSlice({
  name: 'salaryDt',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSalaryDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSalaryDetails.fulfilled, (state, action) => {
        state.status = 'succeed';
        state.salaryDetails = action.payload.salaryDetails;
        state.employees = action.payload.employees;
      })
      .addCase(fetchSalaryDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch salary details';
      });
  },
});

export default salaryDtSlice.reducer;
