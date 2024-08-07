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
        <p>관리 2팀/로드 매니저</p>
        <div className="info-container">
          <ul className="list">
            <li>
              <h5>
                <strong>이메일 </strong> jihoon@sajo.com
              </h5>
            </li>
            <li>
              <h5>
                <strong>휴대폰 번호 </strong> 010-1234-1234
              </h5>
            </li>
            <li>
              <h5>
                <strong>직급 </strong> 관리 2팀/로드 매니저
              </h5>
            </li>
            <li>
              <h5>언제든지 긍정적인 마인드로!😆😆</h5>
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
