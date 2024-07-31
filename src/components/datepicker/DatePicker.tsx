import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Separator, DatePickerContainer, DTPstyle } from './DatePicker.styled';
import { DatePicker } from '@mui/x-date-pickers';
import { DatePickerProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import { useState } from 'react';

type pickerProps = DatePickerProps<Dayjs, false>& {
  dateType : 'single' | 'range'
}

export default function SDataPicker({dateType, ...props}:pickerProps){
  const [startDate, setStartDate] = useState<Dayjs | null>(null)
  const [endDate, setEndDate] = useState<Dayjs | null>(null)

  switch(dateType){
    case 'single':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker slotProps={DTPstyle} {...props}/>
        </LocalizationProvider>
      )
    case 'range':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePickerContainer>
              <DatePicker 
              slotProps={DTPstyle} 
              value={startDate}
              onChange={(newvalue) => setStartDate(newvalue)}

              {...props}/>
            <Separator>-</Separator>
            <DatePicker 
            slotProps={DTPstyle}
            value={endDate}
            onChange={(newvalue) => setEndDate(newvalue)} 
            {...props}/>
          </DatePickerContainer>
        </LocalizationProvider>
      )
  }
}