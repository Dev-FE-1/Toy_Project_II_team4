import SelectBox from "../../components/selectBox/SelectBox";
import Btn from "../../components/button/Button";
import dayjs from "dayjs";
import Heading from "../../components/Heading/Heading";
import * as Styled from './SalaryList.style';
import { useNavigate } from "react-router-dom";
import NoticeCard from "./NoticeCard";

const years = [
  { value: '2021', text: '2021' },
  { value: '2022', text: '2022' },
  { value: '2023', text: '2023' },
  { value: '2024', text: '2024' },
];

const PayData = [
  {id: 1, title: '05월 급여명세서', date:dayjs('2024-05-25').format('YYYY.MM.DD'), state:'false'},
  {id: 2, title: '06월 급여명세서', date:dayjs('2024-06-25').format('YYYY.MM.DD'), state:'false'},
  {id: 3, title: '07월 급여명세서', date:dayjs('2024-07-25').format('YYYY.MM.DD'), state:'true'}
]
PayData.sort((a,b) => b.id-a.id)

const firstPayData = PayData[0]
const originDate = dayjs(firstPayData.date,'YYYY.MM.DD')
const finalDate = originDate.format('YYYY년 MM월 ')
const finalDay = originDate.subtract(2,'day').format('DD일')

export default function SalaryList(){
  const navigate = useNavigate()

  const handleApplicationBtn = (id:number) => {
    if(PayData.find((item) => item.id === id)){
      navigate(`/salary-detail/${id}`)
      }else{
        console.error('급여 명세서가 없습니다.')
      }
    }

  return(
    <Styled.Salary>
      <Heading title="급여내역"/>
      <Styled.Grayline/>
      <NoticeCard date={finalDate} day={finalDay}/>
        <Styled.YearSelect>
        <SelectBox 
          labelId="SalaryYear" 
          id="year-select" 
          label="year" 
          menuItems={years}
        />
      </Styled.YearSelect>
        {PayData.map((el)=>
          (<Styled.ListCardBox key={el.id} $state={el.state} 
            onClick={()=>{handleApplicationBtn(el.id)}}>
            <Styled.List>
            <span className="title">{el.title}</span>
            <span className="date">{el.date}</span>
            </Styled.List>
            <Styled.Btn>
              {el.state === 'true' ? 
              <Btn round ='true' label='신청가능'/> 
              : 
              <Btn round='true' disabled label='지급완료'/> 
              }
            </Styled.Btn>
        </Styled.ListCardBox>))}
    </Styled.Salary>
    )
}
