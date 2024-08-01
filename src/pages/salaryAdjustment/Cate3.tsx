import SDataPicker from '../../components/datepicker/DatePicker';
function Cate3() {
  return (
    <>
      <SDataPicker
        label="날짜 선택"
        dateType="single"
        slotProps={{
          field: {
            sx: {
              width: '100%',
            },
          },
        }}
        format="YYYY - MM - DD"
      />
    </>
  );
}

export default Cate3;
