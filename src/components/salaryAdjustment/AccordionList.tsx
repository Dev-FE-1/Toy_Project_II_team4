import IconBtn from '../iconButton/IconButton';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import * as styled from '../../pages/tempSalaryAdjustment/TempSalaryAdjustment.style';

function AccordionList({ title, details }: AccordionListProps) {
  return (
    <>
      <styled.SAccordion>
        <AccordionSummary
          expandIcon={<ExpandMore fontSize="large" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <styled.AccordionTitle>
            <div className="title-wrap">
              <p className="title">{title}</p>
              <span className="date">{details.date}</span>
            </div>
            <styled.Schip label={details.state} size="small" />
          </styled.AccordionTitle>
          <div className="icons">
            <IconBtn icontype="edit" />
            <IconBtn icontype="delete" />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>결재 상태 : {details.state}</li>
            <li>신청일: {details.date}</li>
            <li>신청 내용: {details.note}</li>
            <li>반려 사유:{details.reason}</li>
          </ul>
        </AccordionDetails>
      </styled.SAccordion>
    </>
  );
}

interface detail {
  state: string;
  date: string;
  note?: string;
  reason?: string;
}

interface AccordionListProps {
  title: string;
  details: detail;
}

export default AccordionList;
