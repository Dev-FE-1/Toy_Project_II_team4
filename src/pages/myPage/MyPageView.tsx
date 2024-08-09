import Btn from '../../components/button/Button';
import * as Styled from './MyPage.styled';
import { EditProfile } from './EditProfile';

export type ProfileType = {
  name: string;
  email: string;
  phone: string;
  position: string;
  responsibility: string;
  message: string;
};

export interface MyPageViewProps {
  handleLogout: () => void;
  isEditing: boolean;
  profile: ProfileType;
  handleEdit: () => void;
  handleCancel: () => void;
  handleSave: (profile: ProfileType) => void;
}

export function MyPageView({
  handleLogout,
  isEditing,
  profile,
  handleEdit,
  handleCancel,
  handleSave,
}: MyPageViewProps) {
  if (isEditing) {
    return <EditProfile initialProfile={profile} onSave={handleSave} onCancel={handleCancel} />;
  }

  return (
    <Styled.MyPageContainer>
      <div className="header-image"></div>
      <div className="profile-container">
        <div className="profile-picture">
          <img
            src="https://cdn.imweb.me/upload/S20201005f584d937f796b/fd54896845aa4.png"
            alt="프로필 이미지"
          />
          <h2>{profile.name}</h2>
          <div className="messageWrapper">
            <span className="message">{profile.message}</span>
          </div>
        </div>
        <div className="info-container">
          <ul className="list">
            <li>
              <div className="property">이메일</div>
              <div>{profile.email}</div>
            </li>
            <li>
              <div className="property">휴대폰 번호</div>
              <div>{profile.phone}</div>
            </li>
            <li>
              <div className="property">직급</div>
              <div>{profile.position}</div>
            </li>
            <li>
              <div className="property">담당</div>
              <div>{profile.responsibility}</div>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <button
            type="button"
            onClick={handleEdit}
            className="
            secondary-button button"
          >
            프로필 수정
          </button>
          <button onClick={handleLogout} className="button">
            로그아웃
          </button>
        </div>
      </div>
    </Styled.MyPageContainer>
  );
}
