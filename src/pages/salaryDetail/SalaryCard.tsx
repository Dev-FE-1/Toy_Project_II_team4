import * as Styled from './SalaryCard.style';
import CardBox from '../../components/cardBox/CardBox';

type salaryData = {
  id: number;
  name: string;
  realpay: string;
  payday: string;
  level: string;
  work: string;
};

export default function SalaryCard({ id, name, realpay, payday, level, work }: salaryData) {
  return (
    <Styled.Container>
      <CardBox key={id}>
        <span className="bold">{name}</span> 님의 노고에 감사드립니다.
        <Styled.ItemWrapper>
          <div className="pay">
            <h5>실수령액</h5>
          </div>
          <div className="pay">
            <h3>
              <Styled.LgFont>{realpay}</Styled.LgFont> 원
            </h3>
          </div>
        </Styled.ItemWrapper>
        <Styled.ItemWrapper>
          <div className="info">급여지급일</div>
          <div className="info">{payday}</div>
        </Styled.ItemWrapper>
        <Styled.ItemWrapper>
          <div className="info">직급</div>
          <div className="info">{level}</div>
        </Styled.ItemWrapper>
        <Styled.ItemWrapper>
          <div className="info">재직기간</div>
          <div className="info">{work}</div>
        </Styled.ItemWrapper>
      </CardBox>
    </Styled.Container>
  );
}
