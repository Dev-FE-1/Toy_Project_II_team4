import IconBtn from '../../components/iconButton/IconButton';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import * as styled from './SalaryAdjustment.style';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../../slices/salaryAdSlice';

function AccordionList({ title, details }: AccordionListProps) {
  const dispatch = useDispatch();
  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    alert('수정 하시겠습니까?');
    // dispatch(
    //   addItem({
    //     title: '99월 급여명세서/경비누락',
    //     details: {
    //       date: '2024.01.25',
    //       state: '결재완료',
    //       note: '비고',
    //       reason: '반려사유 입니다.',
    //     },
    //   })
    // );
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    alert('삭제 하시겠습니까?');
    console.log(details.id);
    dispatch(delItem(details.id));
  };
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
            <IconBtn icontype="edit" onClick={handleEdit} />
            <IconBtn icontype="delete" onClick={handleDelete} />
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
