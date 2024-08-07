import { useNavigate, useParams } from 'react-router-dom';
import IconBtn from '../../components/iconButton/IconButton';
import * as Styled from './SalaryDetail.style';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRef, useEffect, useState } from 'react';
import { SalaryDataItem } from '../salaryList/api/fetchSalaryInfo';
import useSalaryDetails from '../salaryList/useSalaryDetails';
import MoveMonth from './MoveMonth';
import SalaryCard from './SalaryCard';
import ListWrapper from './ListWrapper';
import SelectedModal from './DetailMonthModal';

export default function SalaryDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const userId = 'sajo1234567';

  const { data, error, isLoading } = useSalaryDetails();
  const detailRef = useRef<HTMLDivElement>(null);

  const [salaryData, setSalaryData] = useState<SalaryDataItem | null>(null);

  useEffect(() => {
    if (data && id) {
      const salaryDetails = data.salaryDetails;
      const fetchedSalaryData = salaryDetails[userId]?.find(
        (item: SalaryDataItem) => item.id === parseInt(id)
      );

      if (!fetchedSalaryData) {
        navigate('/payments');
      } else {
        setSalaryData(fetchedSalaryData);
      }
    }
  }, [data, id, navigate, userId]);

  useEffect(() => {
    if (error) {
      console.error('Error fetching salary details:', error.message);
    }
  }, [error]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!data || !salaryData) {
    return null;
  }

  const employees = data.employees;
  const employeeProfile = employees[userId]?.profile || {};

  const handleCloseButton = () => {
    navigate('/payments');
  };

  const handleDownload = () => {
    if (detailRef.current) {
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

  return (
    <>
      <Styled.Header>
        <Styled.LSection>
          <IconBtn icontype="close" onClick={handleCloseButton} />
          <h2>급여명세서</h2>
        </Styled.LSection>
        <Styled.RSection>
          <SelectedModal day={salaryData.payday} />
          <IconBtn icontype="download" onClick={handleDownload} />
        </Styled.RSection>
      </Styled.Header>
      <Styled.Listline />
      <div key={salaryData.id} ref={detailRef}>
        <MoveMonth
          id={salaryData.id}
          date={salaryData.payday}
          salaryData={data.salaryDetails[userId]}
        />
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
