import SDataPicker from '../../components/datepicker/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePickerContainer, Separator } from '../../components/datepicker/DatePicker.styled';
import dayjs from 'dayjs';

function Cate2() {
  const minDate = dayjs(new Date(new Date().getFullYear(), 6, 1));
  const maxDate = dayjs(new Date(new Date().getFullYear(), 7, 0));

  return (
    <>
      <SDataPicker
        label="날짜 선택"
        dateType="single"
        slotProps={{
          field: {
            sx: {
              width: '100%',
              mb: '2rem',
            },
          },
        }}
        format="YYYY-MM-DD"
        name="sDate"
        minDate={minDate}
        maxDate={maxDate}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePickerContainer>
          <TimePicker
            label="시간 선택"
            slotProps={{
              field: {
                sx: {
                  width: '100%',
                  flex: 1,
                },
              },
            }}
            minTime={dayjs().hour(22).minute(0).second(0)}
            maxTime={dayjs().endOf('day')}
            ampm={false}
            name="sTime"
          />
          <Separator>-</Separator>
          <TimePicker
            label="시간 선택"
            slotProps={{
              field: {
                sx: {
                  width: '100%',
                  flex: 1,
                },
              },
              layout: {
                sx: {
                  width: '100%',
                },
              },
            }}
            minTime={dayjs().hour(24).minute(0).second(0)}
            maxTime={dayjs().hour(6).minute(0).second(0)}
            ampm={false}
            name="eTime"
          />
        </DatePickerContainer>
      </LocalizationProvider>
    </>
  );
}

export default Cate2;
