import Heading from '../../components/pageTitle/Heading';
import Btn from '../../components/button/Button';
import IconBtn from '../../components/iconButton/IconButton';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import * as styled from './TempSalaryAdjustment.style';

function SalaryAdjustment() {
  return (
    <styled.Wrapper>
      <Heading title="정정신청" />
      <styled.BtnArea>
        <Btn label="정정신청" size="sm" />
      </styled.BtnArea>
      <styled.SAccordion>
        <AccordionSummary
          expandIcon={<ExpandMore fontSize="large" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <styled.Title>
            <div className="title-wrap">
              <p className="title">03월 급여명세서/경비누락</p>
              <span className="date">2024.07.28</span>
            </div>
            <styled.Schip label="결재대기" size="small" />
          </styled.Title>
          <div className="icons">
            <IconBtn icontype="edit" />
            <IconBtn icontype="delete" />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>결재 상태 : 대기</li>
            <li>신청일: 2023.03.25</li>
            <li>신청 내용: 경비누락</li>
            <li>반려 사유:</li>
          </ul>
        </AccordionDetails>
      </styled.SAccordion>

      <styled.SAccordion>
        <AccordionSummary
          expandIcon={<ExpandMore fontSize="large" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <styled.Title>
            <div className="title-wrap">
              <p className="title">02월 급여명세서/주말근무</p>
              <span className="date">2024.07.28</span>
            </div>
            <styled.Schip label="결재완료" size="small" />
          </styled.Title>
          <div className="icons">
            <IconBtn icontype="edit" />
            <IconBtn icontype="delete" />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>결재 상태 : 승인</li>
            <li>신청일: 2023.03.25</li>
            <li>신청 내용: 경비누락</li>
            <li>반려 사유:</li>
          </ul>
        </AccordionDetails>
      </styled.SAccordion>

      <styled.SAccordion>
        <AccordionSummary
          expandIcon={<ExpandMore fontSize="large" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <styled.Title>
            <div className="title-wrap">
              <p className="title">01월 급여명세서/경비누락</p>
              <span className="date">2024.07.28</span>
            </div>
            <styled.Schip label="반려" size="small" />
          </styled.Title>
          <div className="icons">
            <IconBtn icontype="edit" />
            <IconBtn icontype="delete" />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>결재 상태 : 대기</li>
            <li>신청일: 2023.03.25</li>
            <li>신청 내용: 경비누락</li>
            <li>반려 사유:</li>
          </ul>
        </AccordionDetails>
      </styled.SAccordion>
    </styled.Wrapper>
  );
}

export default SalaryAdjustment;
