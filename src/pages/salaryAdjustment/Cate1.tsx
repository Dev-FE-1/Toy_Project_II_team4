import SDataPicker from '../../components/datepicker/DatePicker';
function Cate1() {
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
        format="YYYY - MM - DD"
      />
    </>
  );
}

export default Cate1;
