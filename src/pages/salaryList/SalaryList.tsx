import SelectBox from "../../components/selectBox/SelectBox";
import SButton from "../../components/button/Button";
import dayjs from "dayjs";

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

export default function SalaryList(){
    return(
    <Styled.Salary>
    <h2>급여내역</h2>
    <Styled.Grayline/>
        <Styled.SalaryCardBox>
            <h2>
                <Styled.Orangetxt>2024년 07월 </Styled.Orangetxt>
            급여 명세서
            </h2>
                <h5>
                <p>정정 신청 기간입니다.</p>
                <p><Styled.Orangetxt>23일</Styled.Orangetxt>까지 신청해주세요.</p>
                </h5>
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
        (<Styled.ListCardBox key={el.id}>
            <Styled.List>
            {el.title} 
            <p>{el.date}</p> 
            </Styled.List>
            {el.state ? 
            <SButton size='sm' label='신청가능'/> : 
            <SButton btntype='disabled' size='sm' label='disable'/> }
            </Styled.ListCardBox>))}
    </Styled.Salary>
    )
}