import { useNavigate, useParams } from "react-router-dom";
import Btn from "../../components/button/Button";
import IconBtn from "../../components/iconButton/IconButton";
import * as Styled from './SalaryDetail.style';
import Heading from "../../components/Heading/Heading";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React, { useRef } from "react";
import { SalaryDataItem} from "../salaryList/api/fetchSalaryInfo";
import useSalaryDetails from "../salaryList/useSalaryDetails";
import MoveMonth from "./MoveMonth";
import SalaryCard from "./SalaryCard";
import ListWrapper from "./ListWrapper";

export default function SalaryDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const userId = "sajo1234567";

  const { data, error, isLoading } = useSalaryDetails()

  const detailRef = useRef<HTMLDivElement>(null)

  if (isLoading) {return <div>로딩 중...</div>}
  if (error) {return <div>{error.message}</div>}
  if (!id || !data) {return <div>급여 명세서가 없습니다.</div>
}

  const salaryDetails = data.salaryDetails
  const employees = data.employees

  const salaryData = salaryDetails[userId].find((item: SalaryDataItem) => item.id === parseInt(id))

  if (!salaryData) {
    return <div>해당 급여 명세서는 존재하지 않습니다.</div>
  }

  const employeeProfile = employees[userId]?.profile || {};
  const handleCloseButton = () => {
    navigate('/payments')
  };

  const handleDownload = () => {
    if (detailRef.current) {
        html2canvas(detailRef.current).then(canvas => {
          const imgData = canvas.toDataURL('image/png')
          const pdf = new jsPDF()
          const imgProps = pdf.getImageProperties(imgData)
          const pdfWidth = pdf.internal.pageSize.getWidth()
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
          pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
          pdf.save(`${employeeProfile.name || '급여명세서'}_${salaryData.payday.slice(5, 7)}월_급여명세서.pdf`)
        }).catch(console.error)
      }
    };

    return (
        <>
          <Styled.Header>
            <Styled.LSection>
              <IconBtn icontype="close" onClick={handleCloseButton} />
                <Heading title="급여명세서" />
              </Styled.LSection>
              <Styled.RSection>
                <Btn size="lg" label='정정신청' />
                <IconBtn icontype="download" onClick={handleDownload} />
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
                />
                <Styled.Info>
                  <Styled.Listline />
                  <ListWrapper details={salaryData.details} />
                  <Styled.Listline />
                </Styled.Info>
          </div>
        </>
    );
}