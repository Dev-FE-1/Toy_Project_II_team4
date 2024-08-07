import SelectBox from "../../components/selectBox/SelectBox";
import Btn from "../../components/button/Button";
import * as Styled from './SalaryList.style';
import { useNavigate } from "react-router-dom";
import NoticeCard from "./NoticeCard";
import useSalaryDetails from "./useSalaryDetails";
import Heading from "../../components/Heading/Heading";

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
  const sortedSalaryList = [...salaryList].sort((a,b) => b.id-a.id)

  const handleApplicationBtn = (id:number) => {
    if(sortedSalaryList.find((item) => item.id === id)){
      navigate(`/salary-detail/${id}`)
    }else{
          console.error('급여 명세서가 없습니다.')
    }
  }

  return(
    <Styled.Salary>
      <Heading title="급여정산"/>
      <NoticeCard salaryList={sortedSalaryList}/>
        <Styled.YearSelect>
        <SelectBox 
          labelId="SalaryYear" 
          id="year-select" 
          label="year" 
          menuItems={years}
        />
      </Styled.YearSelect>
        {sortedSalaryList.map((el)=>
          (<Styled.ListCardBox key={el.id} $state={el.state} 
            onClick={()=>{handleApplicationBtn(el.id)}}>
            <Styled.List $state={el.state}>
            <span className="title">{el.title}</span>
            <span className="date">{el.state === true ? '지급예정' : el.payday}</span>
            </Styled.List>
            <Styled.Btn>
              {el.state === true ? 
              <Btn round ='true' btntype='outlined' size='lg' label='신청가능'/> 
              : 
              <Btn round='true' disabled size='lg' label='지급완료'/> 
              }
            </Styled.Btn>
        </Styled.ListCardBox>))}
    </Styled.Salary>
    )
}
