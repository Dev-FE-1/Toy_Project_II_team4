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
          layout: {
            sx: {
              '& .MuiDayCalendar-weekDayLabel': {
                fontSize: 'var(--font-size-small)',
              },
              '& .MuiPickersCalendarHeader-labelContainer': {
                fontSize: 'var(--font-size-primary)',
              },
              '& .MuiPickersDay-root': {
                fontSize: 'var(--font-size-small)',
              },
              '& .MuiDialogActions-root .MuiButtonBase-root': {
                fontSize: 'var(--font-size-small)',
                background: 'var(--color-pri)',
                color: 'var(--color-white)',
              },
              '& .MuiDialogActions-root .MuiButtonBase-root:first-child': {
                background: 'var(--color-sec)',
                color: 'var(--color-pri)',
              },
            },
          },
          calendarHeader: {
            format: 'YYYY-MM',
          },
          field: {
            sx: {
              width: '100%',
              mb: '2rem',
            },
          },
          toolbar: {
            hidden: true,
          },
          textField: {
            required: true,
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
              layout: {
                sx: {
                  width: '100%',
                  fontSize: 'var(--font-size-small)',
                  '& .MuiTypography-root': {
                    fontSize: 'var(--font-size-small)',
                  },
                  '& .MuiPickersToolbar-content .MuiTypography-root': {
                    fontSize: 'var(--font-size-xlarge)',
                  },
                  '& .MuiClockNumber-root': {
                    fontSize: 'var(--font-size-small)',
                    fontWeight: 'bold',
                    color: '#333',
                  },
                  '& .MuiClockNumber-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.2)',
                    fontWeight: 'normal',
                  },
                  '& .MuiClockNumber-root.Mui-selected': {
                    color: 'var(--color-white)',
                  },
                  '& .MuiDialogActions-root .MuiButtonBase-root': {
                    fontSize: 'var(--font-size-small)',
                    background: 'var(--color-pri)',
                    color: 'var(--color-white)',
                  },
                  '@media (max-width: 600px)': {
                    '& .MuiDialogActions-root .MuiButtonBase-root:first-of-type': {
                      background: 'var(--color-sec)',
                      color: 'var(--color-pri)',
                    },
                  },
                },
              },
              field: {
                sx: {
                  width: '100%',
                  flex: 1,
                },
              },
              textField: {
                required: true,
              },
            }}
            minTime={dayjs().hour(22).minute(0).second(0)}
            maxTime={dayjs().endOf('day')}
            ampm={false}
            name="sTime"
            views={['hours']}
            format="HH:mm"
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
                  fontSize: 'var(--font-size-small)',
                  '& .MuiTypography-root': {
                    fontSize: 'var(--font-size-small)',
                  },
                  '& .MuiPickersToolbar-content .MuiTypography-root': {
                    fontSize: 'var(--font-size-xlarge)',
                  },
                  '& .MuiClockNumber-root': {
                    fontSize: 'var(--font-size-small)',
                    fontWeight: 'bold',
                    color: '#333',
                  },
                  '& .MuiClockNumber-root.Mui-disabled': {
                    color: 'rgba(0, 0, 0, 0.2)',
                    fontWeight: 'normal',
                  },
                  '& .MuiClockNumber-root.Mui-selected': {
                    color: 'var(--color-white)',
                  },
                  '& .MuiDialogActions-root .MuiButtonBase-root': {
                    fontSize: 'var(--font-size-small)',
                    background: 'var(--color-pri)',
                    color: 'var(--color-white)',
                  },
                  '@media (max-width: 600px)': {
                    '& .MuiDialogActions-root .MuiButtonBase-root:first-of-type': {
                      background: 'var(--color-sec)',
                      color: 'var(--color-pri)',
                    },
                  },
                },
              },
              textField: {
                required: true,
              },
            }}
            minTime={dayjs().hour(0).minute(0).second(0)}
            maxTime={dayjs().hour(6).minute(0).second(0)}
            ampm={false}
            name="eTime"
            views={['hours']}
            format="HH:mm"
          />
        </DatePickerContainer>
      </LocalizationProvider>
    </>
  );
}

export default Cate2;
