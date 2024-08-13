import * as Styled from './NoticeCard.style';
import Btn from '../../components/button/Button';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchSalaryDetails, SalaryDataItem } from '../../slices/salaryDtSlice';
import { useEffect } from 'react';

type noticeData = {
  salaryList?: SalaryDataItem[];
  button?: boolean;
  label?: React.ReactNode;
  handleBtn?: (id: number) => void;
};

export default function NoticeCard({ button = false, label, handleBtn }: noticeData) {
  const userId = 'sajo1234567';
  const dispatch: AppDispatch = useDispatch();
  const { salaryDetails, status } = useSelector((state: RootState) => state.salaryDt);

  useEffect(() => {
    if (status === 'idle') {
      void dispatch(fetchSalaryDetails());
    }
  }, [dispatch, status]);

  const salaryList = salaryDetails[userId] || [];

  if (status === 'loading') {
    return (
      <Styled.SalaryCardBox>
        <h2>급여명세서</h2>
        <p>로딩 중입니다.</p>
      </Styled.SalaryCardBox>
    );
  }

  const firstPayData = salaryList.at(-1);

  if (!firstPayData) {
    return (
      <Styled.SalaryCardBox>
        <h2>급여명세서</h2>
        <p>급여 명세서가 없습니다.</p>
      </Styled.SalaryCardBox>
    );
  }

  const originDate = dayjs(firstPayData.payday, 'YYYY.MM.DD');
  const finalDate = originDate.subtract(1, 'month').format('MM월 ');
  const finalDay = originDate.subtract(2, 'day').format('DD일');

  return (
    <Styled.SalaryCardBox>
      <h2>
        <Styled.Orangetxt>{finalDate}</Styled.Orangetxt>급여명세서
      </h2>
      <h6 className="imoge">✉️</h6>
      <h3>
        <p>정정 신청 기간입니다.</p>
        <p>
          <Styled.Orangetxt>{finalDay}</Styled.Orangetxt>까지 신청해주세요.
        </p>
      </h3>
      {button && (
        <Btn
          btnsize="md"
          size="lg"
          label={label || <></>}
          onClick={() => handleBtn && handleBtn(firstPayData.id)}
        />
      )}
    </Styled.SalaryCardBox>
  );
}
