import Btn from "../../components/button/Button";
import IconBtn from "../../components/iconButton/IconButton";
import * as Styled from './SalaryDeatil.style';
import Heading from "../../components/Heading/Heading";
import dayjs from "dayjs";
import SalaryCard from "./SalaryCard";
import MoveMonth from "./MoveMonth";

interface SalaryDetailItem {
  label: string;
  value: string;
  type?: 'main' | 'sub';
}

interface SalaryDataItem {
  id: number;
  name: string;
  realpay: string;
  payday: string;
  details: SalaryDetailItem[];
}

const SalaryData: SalaryDataItem[] = [
  {
    id: 1,
    name: '김지훈',
    realpay: '3,199,260',
    payday: dayjs('2024-07-25').format('YYYY.MM.DD'),
    details: [
      { label: '지급내역', value: '3,500,000', type: 'main' },
      { label: '기본급', value: '3,500,000', type: 'sub' },
      { label: '공제내역', value: '300,700', type: 'main' },
      { label: '국민연금', value: '150,000', type: 'sub' },
      { label: '수당내역', value: '10,500,000', type: 'main' },
      { label: '인센티브', value: '10,500,000', type: 'sub' },
    ]
  }
];

const ListWrapper = ({ details }: { details: SalaryDetailItem[] }) => {
  return (
    <>
      {details.map((item, index) => (
        <Styled.ListWrapper key={index} type={item.type}>
          <div>{item.label}</div>
          <div>{item.value}원</div>
        </Styled.ListWrapper>
      ))}
    </>
  );
}

export default function SalaryDetail() {
  return (
    <>
      <Styled.Header>
        <Styled.LSection>
          <IconBtn icontype="close" />
          <Heading title="급여명세서" />
        </Styled.LSection>
        <Styled.RSection>
          <Btn size="lg" label='정정신청' />
          <IconBtn icontype="download" />
        </Styled.RSection>
      </Styled.Header>
      <Styled.Listline />
      <MoveMonth/>
      {SalaryData.map((el) => (
        <div key={el.id}>
          <SalaryCard
            id={el.id} 
            name={el.name} 
            realpay={el.realpay} 
            payday={el.payday}
          />
          <Styled.Info>
            <Styled.Listline />
            <ListWrapper details={el.details} />
            <Styled.Listline />
          </Styled.Info>
        </div>
      ))}
    </>
  );
}
