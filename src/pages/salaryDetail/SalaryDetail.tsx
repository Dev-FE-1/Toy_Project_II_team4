import React from "react";
import Btn from "../../components/button/Button";
import IconBtn from "../../components/iconButton/IconButton";
import * as Styled from './SalaryDetail.style';
import Heading from "../../components/pageTitle/Heading";
import CardBox from "../../components/cardBox/CardBox";
import dayjs from "dayjs";

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
      { label: '지급내역', value: '3,500,000', type:'main' },
      { label: '기본급', value: '3,500,000', type:'sub' },
			{ label: '공제내역', value: '300,700', type:'main' }, 
      { label: '국민연금', value: '150,000', type:'sub'},
			{ label: '수당내역', value: '10,500,000,', type:'main'},
      { label: '인센티브', value: '10,500,000', type:'sub'},
    ]
  }
];

function ListWrapper({ details }: { details: SalaryDetailItem[] }) {
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

function SalaryDetail() {
  return (
    <>
      <Styled.Header>
        <Styled.LSection>
          <IconBtn icontype="close"/>
          <Heading title="급여명세서"/>
        </Styled.LSection>
        <Styled.RSection>
          <Btn label='정정신청'/>
          <IconBtn icontype="download"/>
        </Styled.RSection>
      </Styled.Header>
			<Styled.Listline/>
			<Styled.Movemonth></Styled.Movemonth>
      <Styled.Container>
        {SalaryData.map((el) => (
          <CardBox key={el.id}>
            <span className="name">{el.name}</span> 님의 노고에 감사드립니다.<hr/>
            <Styled.ItemWrapper>
              <div className="pay"><h5>실수령액</h5></div>
              <div className="pay"><h3>{el.realpay}원</h3></div>
            </Styled.ItemWrapper>
            <hr/>
            <Styled.ItemWrapper>
              <div>급여지급일</div>
              <div>{el.payday}</div>
            </Styled.ItemWrapper>
          </CardBox>
        ))}
      </Styled.Container>
      {SalaryData.map((el) => (
        <Styled.Info key={el.id}>
					<Styled.Thinline/>
          <ListWrapper details={el.details} />
					<Styled.Thinline/>
        </Styled.Info>
      ))}
    </>
  );
}

export default SalaryDetail;
