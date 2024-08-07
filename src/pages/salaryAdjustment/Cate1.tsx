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
          field: {
            sx: {
              flex: '1',
            },
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
