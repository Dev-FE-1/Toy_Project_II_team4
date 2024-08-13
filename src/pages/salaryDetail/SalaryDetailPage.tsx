import { useNavigate, useParams, useLocation } from 'react-router-dom';
import IconBtn from '../../components/iconButton/IconButton';
import * as Styled from './SalaryDetail.style';
import { useRef, useEffect, useState } from 'react';
import MoveMonth from './MoveMonth';
import SalaryCard from './SalaryCard';
import ListWrapper from './ListWrapper';
import SelectedModal from './DetailMonthModal';
import Loading from '../../components/loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchSalaryDetails, SalaryDataItem } from '../../slices/salaryDtSlice';

export default function SalaryDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const location = useLocation();
  const userId = 'sajo1234567';

  const dispatch: AppDispatch = useDispatch();
  const { salaryDetails, employees, status, error } = useSelector(
    (state: RootState) => state.salaryDt
  );

  const detailRef = useRef<HTMLDivElement>(null);
  const [salaryData, setSalaryData] = useState<SalaryDataItem | null>(null);
  const [returnPath, setReturnPath] = useState<string>('/'); // Default path

  useEffect(() => {
    if (status === 'idle') {
      void dispatch(fetchSalaryDetails());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (id && salaryDetails) {
      const fetchedSalaryData = salaryDetails[userId]?.find(
        (item: SalaryDataItem) => item.id === parseInt(id)
      );

      if (!fetchedSalaryData) {
        navigate('/payments');
      } else {
        setSalaryData(fetchedSalaryData);
      }
    }
  }, [id, salaryDetails, navigate, userId]);

  useEffect(() => {
    if (error) {
      console.error('Error fetching salary details:', error);
    }
  }, [error]);

  useEffect(() => {
    const from = (location.state as { from?: string })?.from;
    if (from === 'home') {
      setReturnPath('/home');
    } else if (from === 'payments') {
      setReturnPath('/payments');
    } else {
      setReturnPath('/payments');
    }
  }, [location.state]);

  const employeeProfile = employees[userId]?.profile || {};
  const handleCloseButton = () => {
    navigate(returnPath);
  };

  if (!salaryData) {
    return <div>급여 데이터를 불러오는 중입니다.</div>;
  }

  const handleDownload = async () => {
    if (detailRef.current) {
      const { default: html2canvas } = await import('html2canvas');
      const { jsPDF } = await import('jspdf');

      html2canvas(detailRef.current)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();

          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = pdf.internal.pageSize.getHeight();

          const imgProps = pdf.getImageProperties(imgData);
          const imgWidth = imgProps.width;
          const imgHeight = imgProps.height;

          const scale = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          const newImgWidth = imgWidth * scale;
          const newImgHeight = imgHeight * scale;

          const x = (pdfWidth - newImgWidth) / 2;
          const y = (pdfHeight - newImgHeight) / 2;

          pdf.addImage(imgData, 'PNG', x, y, newImgWidth, newImgHeight);
          pdf.save(
            `${employeeProfile.name || '급여명세서'}_${salaryData.payday.slice(5, 7)}월_급여명세서.pdf`
          );
        })
        .catch(console.error);
    }
  };

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <div>Error:{error}</div>;
  }

  return (
    <>
      <Styled.Header>
        <Styled.LSection>
          <IconBtn icontype="close" onClick={handleCloseButton} />
          <h2>급여명세서</h2>
        </Styled.LSection>
        <Styled.RSection>
          <SelectedModal month={salaryData.payday} />
          <IconBtn icontype="download" onClick={void handleDownload} />
        </Styled.RSection>
      </Styled.Header>
      <Styled.Listline />
      <div key={salaryData.id} ref={detailRef}>
        <MoveMonth id={salaryData.id} date={salaryData.payday} salaryData={salaryDetails[userId]} />
        <SalaryCard
          id={salaryData.id}
          name={employeeProfile.name || '이름 없음'}
          realpay={salaryData.realpay}
          payday={salaryData.payday}
          level={salaryData.level}
          work={salaryData.work}
        />
        <Styled.Info>
          <ListWrapper details={salaryData.details} />
        </Styled.Info>
      </div>
    </>
  );
}
