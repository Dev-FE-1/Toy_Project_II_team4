import { useNavigate,useParams } from "react-router-dom";
import Btn from "../../components/button/Button";
import IconBtn from "../../components/iconButton/IconButton";
import * as Styled from './SalaryDetail.style';
import Heading from "../../components/Heading/Heading";
import dayjs from "dayjs";
import SalaryCard from "./SalaryCard";
import MoveMonth from "./MoveMonth";
import ListWrapper from "./ListWrapper";

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
    payday: dayjs('2024-05-25').format('YYYY.MM.DD'),
    details: [
      { label: '지급내역', value: '3,500,000', type: 'main' },
      { label: '기본급', value: '3,500,000', type: 'sub' },
      { label: '공제내역', value: '300,700', type: 'main' },
      { label: '국민연금', value: '150,000', type: 'sub' },
      { label: '수당내역', value: '10,500,000', type: 'main' },
      { label: '인센티브', value: '10,500,000', type: 'sub' },
    ]
  },
  {
    id: 2,
    name: '김지훈',
    realpay: '3,199,260',
    payday: dayjs('2024-06-25').format('YYYY.MM.DD'),
    details: [
      { label: '지급내역', value: '3,500,000', type: 'main' },
      { label: '기본급', value: '3,500,000', type: 'sub' },
      { label: '공제내역', value: '300,700', type: 'main' },
      { label: '국민연금', value: '150,000', type: 'sub' },
      { label: '수당내역', value: '10,500,000', type: 'main' },
      { label: '인센티브', value: '10,500,000', type: 'sub' },
    ]
  },
  {
    id: 3,
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

SalaryData.sort((a,b)=>b.id-a.id)

export default function SalaryDetail() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const detailData = id ? SalaryData.find(data => data.id === parseInt(id)) : undefined

  if (!detailData) {
    return <div>급여 명세서가 없습니다.</div>;
  }

  const handleCloseButton = () =>{
    navigate('/payments')
  }

  const handleDownload = () =>{

  }
  
  return (
    <>
      <Styled.Header>
        <Styled.LSection>
          <IconBtn icontype="close" onClick={handleCloseButton}/>
          <Heading title="급여명세서" />
        </Styled.LSection>
        <Styled.RSection>
          <Btn size="lg" label='정정신청' />
          <IconBtn icontype="download" onClick={handleDownload} />
        </Styled.RSection>
      </Styled.Header>
      <Styled.Listline />
      <MoveMonth id = {detailData.id} date={detailData.payday}/>
      <div key={detailData.id}>
        <SalaryCard
          id={detailData.id} 
          name={detailData.name} 
          realpay={detailData.realpay} 
          payday={detailData.payday}
        />
        <Styled.Info>
          <Styled.Listline />
          <ListWrapper details={detailData.details} />
          <Styled.Listline />
        </Styled.Info>
      </div>
    </>
  );
}
