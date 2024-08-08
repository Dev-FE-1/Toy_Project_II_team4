import IconBtn from '../../components/iconButton/IconButton';
import { AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { deleteSalaryAdData, fetchSalaryAdData } from '../../slices/salaryAdSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import CardBox from '../../components/cardBox/CardBox';
import { useEffect } from 'react';
import Loading from '../../components/loading/Loading';

import * as styled from './SalaryAdjustment.style';

function AccordionList() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.salaryAd);

  useEffect(() => {
    void dispatch(fetchSalaryAdData());
  }, [dispatch]);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   e.stopPropagation();
  //   confirm('수정 하시겠습니까?');
  // };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    const id = String(e.currentTarget.closest('.accordion')?.getAttribute('data-id'));
    if (confirm('삭제 하시겠습니까?')) {
      void dispatch(deleteSalaryAdData(id));
    }
  };
  if (data.length !== 0) {
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
                <div className="title">
                  <p>{`[${item.month.split('-')[1]}월 급여명세서] ${item.category}`}</p>
                  <span className="date">{item.requestTime}</span>
                </div>
                <styled.Schip label={item.status} size="small" />
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <span>카테고리 : </span>[{item.category}]
                  </li>
                  <li>
                    <span>신청 내용 : </span>
                    {item.description}
                  </li>
                  <li>
                    <span>정정 대상일 : </span>
                    {item.startTime.split(' ')[0]}
                  </li>
                  <li>
                    <span>결재 상태 : </span>
                    {item.status}
                  </li>
                </ul>
                {item.status === '결재대기' && (
                  <div className="icons">
                    {/* <IconBtn icontype="edit" onClick={handleEdit} /> */}
                    <IconBtn icontype="delete" onClick={handleDelete} />
                  </div>
                )}
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
