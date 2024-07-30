import SelectBox from "../../components/selectBox/SelectBox";
import Btn from "../../components/button/Button";
import dayjs from "dayjs";
import Heading from "../../components/Heading/Heading";
import * as Styled from './SalaryList.style';

const years = [
  { value: '2021', text: '2021' },
  { value: '2022', text: '2022' },
  { value: '2023', text: '2023' },
  { value: '2024', text: '2024' },
];

const PayData = [
  {id: 1, title: '05월 급여명세서', date:dayjs('2024-05-25').format('YYYY.MM.DD'), state:false},
  {id: 2, title: '06월 급여명세서', date:dayjs('2024-06-25').format('YYYY.MM.DD'), state:false},
  {id: 3, title: '07월 급여명세서', date:dayjs('2024-07-25').format('YYYY.MM.DD'), state:true}
]
PayData.sort((a,b) => b.id-a.id)

const ApplicationBtn = () =>{
  console.log('클릭 클릭')
  console.log('이 부분 props로 아이디 받고 navigate salary-detail처리')
}

export default function SalaryList(){
  return(
    <Styled.Salary>
      <Heading title="급여내역"/>
      <Styled.Grayline/>
        <Styled.SalaryCardBox>
          <h2><Styled.Orangetxt>{dayjs('2024-07-25').format('YYYY년 MM월 ')}</Styled.Orangetxt>급여 명세서</h2>
            <h4>
              <p>정정 신청 기간입니다.</p>
              <p><Styled.Orangetxt>23일</Styled.Orangetxt>까지 신청해주세요.</p>
            </h4>
        </Styled.SalaryCardBox>
    <Styled.YearSelect>
    <SelectBox 
    labelId="SalaryYear" 
    id="year-select" 
    label="year" 
    menuItems={years}
    />
    </Styled.YearSelect>
    {PayData.map((el)=>
        (<Styled.ListCardBox key={el.id} state={el.state}>
            <Styled.List>
            <span className="title">{el.title}</span>
            <span className="date">{el.date}</span>
            </Styled.List>
            <Styled.Btn>
            {el.state ? 
            <Btn round ='true' label='신청가능' onClick={ApplicationBtn}/> : 
            <Btn round='true' disabled label='지급완료'/> 
            }
            </Styled.Btn>
            </Styled.ListCardBox>))}
    </Styled.Salary>
    )
}
