import * as Styled from './SalaryCard.style';
import CardBox from "../../components/cardBox/CardBox";

type salaryData = {
  id: number;
  name: string;
  realpay: string;
  payday: string;
}

export default function SalaryCard({id, name, realpay, payday}:salaryData){
  return(
  <Styled.Container>
  <CardBox key={id}>
    <span className="bold">{name}</span> 님의 노고에 감사드립니다.
      <hr />
      <Styled.ItemWrapper>
        <div className="pay"><h5>실수령액</h5></div>
          <div className="pay"><h3>{realpay}원</h3></div>
      </Styled.ItemWrapper><hr/>
      <Styled.ItemWrapper>
        <div className="pay">급여지급일</div>
          <div className="pay">{payday}</div>
      </Styled.ItemWrapper>
  </CardBox>
  </Styled.Container>
  )
}