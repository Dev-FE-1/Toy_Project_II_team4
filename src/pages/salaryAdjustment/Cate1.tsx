import SDataPicker from '../../components/datepicker/DatePicker';
import dayjs from 'dayjs';
function Cate1() {
  const minDate = dayjs(new Date(new Date().getFullYear(), 6, 1));
  const maxDate = dayjs(new Date(new Date().getFullYear(), 7, 0));
  return (
    <>
      <SDataPicker
        label="날짜 선택"
        dateType="range"
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
              '@media (max-width: 600px)': {
                '& .MuiDialogActions-root .MuiButtonBase-root:first-of-type': {
                  background: 'var(--color-sec)',
                  color: 'var(--color-pri)',
                },
              },
            },
          },
          calendarHeader: {
            format: 'YYYY-MM',
          },
          field: {
            sx: {
              flex: '1',
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
        minDate={minDate}
        maxDate={maxDate}
      />
    </>
  );
}

export default Cate1;
