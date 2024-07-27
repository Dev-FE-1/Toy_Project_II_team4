import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Separator, DatePickerContainer, DTPstyle } from './DatePicker.styled';
import { DatePicker } from '@mui/x-date-pickers';

type pickerProps = {
  dateType : 'single' | 'range'
}

export default function SDataPicker({dateType}:pickerProps){
  switch(dateType){
    case 'single':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker slotProps={DTPstyle}/>
        </LocalizationProvider>
      )
    case 'range':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerContainer>
              <DatePicker slotProps={DTPstyle}/>
            <Separator>-</Separator>
            <DatePicker slotProps={DTPstyle}/>
          </DatePickerContainer>
        </LocalizationProvider>
      )
  }
}