import Btn from '../../components/button/Button';
import { useLogout } from '../../hooks/useLogout';
import * as Styled from './MyPage.styled';

export function MyPage() {
  const { handleLogout } = useLogout(); // TODO 하이오더 컴포넌트 필요
  return (
    <Styled.MyPageContainer>
      <div className="header-image"></div>
      <div className="profile-container">
        <div className="profile-picture">
          <img
            src="https://cdn.imweb.me/upload/S20201005f584d937f796b/fd54896845aa4.png"
            alt="프로필 이미지"
          />
        </div>
        <h2>김지훈</h2>
        <span className="message">언제든지 긍정적인 마인드로!😆😆</span>
        <div className="info-container">
          <ul className="list">
            <li>
              <div className="property">이메일</div>
              <div>jihoon@sajo.com</div>
            </li>
            <li>
              <div>휴대폰 번호</div>
              <div> 010-1234-1234</div>
            </li>
            <li>
              <div>직급</div>
              <div>관리 2팀/로드 매니저</div>
            </li>
            <li>
              <div>담당</div>
              <div>블루핑크 담당</div>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <Btn label="프로필 수정" className="secondary-button"></Btn>
          <Btn onClick={handleLogout} label="로그 아웃" />
        </div>
      </div>
    </Styled.MyPageContainer>
  );
}
