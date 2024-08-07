interface FormatDateProps {
  dateString: string;
  dayAndWeekday: string;
  Year: string;
  Month: string;
  date: string;
  weekDay: string;
}

//date 달의 총 일수
export const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

//date 달의 1일 요일
export const getFirstDayOfMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

// props: Date 객체
// return: dateString: 'YYYY-MM-DD' || dayAndWeekday: 'DD일 W요일'
export const getFormatDate = (date: Date): FormatDateProps => {
  const weekdays: string[] = ['일', '월', '화', '수', '목', '금', '토'];

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const weekday = weekdays[date.getDay()];

  return {
    dateString: `${year}-${month}-${day}`,
    dayAndWeekday: `${day}일 ${weekday}요일`,
    Year: `${year}`,
    Month: `${month}`,
    date: `${day}`,
    weekDay: `${weekday}요일`,
  };
};
