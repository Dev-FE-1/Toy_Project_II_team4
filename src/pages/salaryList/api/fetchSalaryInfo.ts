import { ref, get } from 'firebase/database';
import { firebaseDB } from '../../../api/firebaseApp';

export interface SalaryDetailItem {
  label: string;
  value: string;
  type?: 'main' | 'sub';
}

export interface SalaryDataItem {
  id: number;
  realpay: string;
  payday: string;
  state: boolean;
  title: string;
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

export async function fetchSalaryDetails(): Promise<{
  salaryDetails: SalaryDetails;
  employees: Employees;
}> {
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

    const employees = employeesSnapshot.exists() 
      ? (employeesSnapshot.val() as Employees)
      : {};

    return {
      salaryDetails, employees
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        salaryDetails: {},
        employees: {},
      };
    }
}