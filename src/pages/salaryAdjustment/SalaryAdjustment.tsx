import AccordionList from './AccordionList';
import Heading from '../../components/Heading/Heading';
import AdjustmentModal from './AdjustmentModal';
import * as styled from './SalaryAdjustment.style';

function SalaryAdjustment() {
  return (
    <styled.Wrapper>
      <Heading title="정정신청" />
      <div className="btnArea">
        <AdjustmentModal month="07" btnsize="md" />
      </div>
      <AccordionList />
    </styled.Wrapper>
  );
}

export default SalaryAdjustment;
