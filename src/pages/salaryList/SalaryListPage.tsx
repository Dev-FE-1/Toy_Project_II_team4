import SelectBox from "../../components/selectBox/SelectBox";
import Btn from "../../components/button/Button";
import dayjs from "dayjs";
import Heading from "../../components/Heading/Heading";
import * as Styled from './SalaryList.style';
import { useNavigate } from "react-router-dom";
import NoticeCard from "./NoticeCard";
import useSalaryDetails from "./useSalaryDetails";

const years = [
  { value: '2021', text: '2021' },
  { value: '2022', text: '2022' },
  { value: '2023', text: '2023' },
  { value: '2024', text: '2024' },
];

export default function SalaryListPage(){
  const navigate = useNavigate()
  const userId = "sajo1234567"
  const {data, error, isLoading} = useSalaryDetails()

  if (isLoading) {return <div>Loading...</div>}
  if (error) {return <div>Error: {error.message}</div>}

  const salaryList = data?.salaryDetails[userId] || [] 
  salaryList.sort((a,b) => b.id-a.id)

  const firstPayData = salaryList[0]
  const originDate = dayjs(firstPayData.payday,'YYYY.MM.DD')
  const finalDate = originDate.format('YYYY년 MM월 ')
  const finalDay = originDate.subtract(2,'day').format('DD일')

  const handleApplicationBtn = (id:number) => {
    if(salaryList.find((item) => item.id === id)){
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
        {salaryList.map((el)=>
          (<Styled.ListCardBox key={el.id} $state={el.state} 
            onClick={()=>{handleApplicationBtn(el.id)}}>
            <Styled.List>
            <span className="title">{el.title}</span>
            <span className="date">{el.payday}</span>
            </Styled.List>
            <Styled.Btn>
              {el.state === true ? 
              <Btn round ='true' label='신청가능'/> 
              : 
              <Btn round='true' disabled label='지급완료'/> 
              }
            </Styled.Btn>
        </Styled.ListCardBox>))}
    </Styled.Salary>
    )
}
