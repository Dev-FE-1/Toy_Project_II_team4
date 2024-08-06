import IconBtn from '../../components/iconButton/IconButton';
import { AccordionSummary, AccordionDetails, Card } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { deleteSalaryAdData, fetchSalaryAdData } from '../../slices/salaryAdSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import CardBox from '../../components/cardBox/CardBox';

import * as styled from './SalaryAdjustment.style';

function AccordionList() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.salaryAd);

  useEffect(() => {
    void dispatch(fetchSalaryAdData());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    confirm('수정 하시겠습니까?');
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const id = String(e.currentTarget.closest('.accordion')?.getAttribute('data-id'));
    if (confirm('삭제 하시겠습니까?')) {
      void dispatch(deleteSalaryAdData(id));
    }
  };
  if (data.length !== 0) {
    console.log(data);

    return (
      <>
        {data.map((item) => {
          return (
            <styled.SAccordion key={item.id} data-id={item.id} className="accordion">
              <AccordionSummary
                expandIcon={<ExpandMore fontSize="large" />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <styled.AccordionTitle>
                  <div className="title-wrap">
                    <p className="title">{item.category}</p>
                    <span className="date">{item.requestTime}</span>
                  </div>
                  <styled.Schip label={item.status} size="small" />
                </styled.AccordionTitle>
                <div className="icons">
                  <IconBtn icontype="edit" onClick={handleEdit} />
                  <IconBtn icontype="delete" onClick={handleDelete} />
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>결재 상태 : {item.status}</li>
                  <li>신청일: {item.requestTime}</li>
                  <li>신청 내용: {item.description}</li>
                </ul>
              </AccordionDetails>
            </styled.SAccordion>
          );
        })}
      </>
    );
  } else {
    return <CardBox>데이터가 없습니다.</CardBox>;
  }
}

export default AccordionList;
