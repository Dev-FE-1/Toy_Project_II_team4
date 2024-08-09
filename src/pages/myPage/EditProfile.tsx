import { ChangeEvent, FormEvent, useState } from 'react';
import Btn from '../../components/button/Button';
import * as Styled from './EditProfile.styled';
import { ProfileType } from './MyPageView';

export interface EditProfileProps {
  initialProfile: ProfileType;
  onSave: (profile: {
    name: string;
    message: string;
    email: string;
    phone: string;
    position: string;
    responsibility: string;
  }) => void;
  onCancel: () => void;
}

export interface handleChangeProps {
  name: string;
  value: string;
}

export function EditProfile({ initialProfile, onSave, onCancel }: EditProfileProps) {
  const [profile, setProfile] = useState(initialProfile);

  // TODO handleSubmit 함수 내에서 입력값 유효성 검사 및 오류 처리를 구현하세요.
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setProfile((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSave(profile);
  };

  return (
    <Styled.EditProfileContainer>
      <h2>프로필 수정</h2>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="message">상태 메시지</label>
            <input
              type="text"
              id="message"
              name="message"
              value={profile.message}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">휴대폰 번호</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">직급</label>
            <input
              type="text"
              id="position"
              name="position"
              value={profile.position}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="responsibility">담당</label>
            <input
              type="text"
              id="responsibility"
              name="responsibility"
              value={profile.responsibility}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <Btn type="button" onClick={onCancel} label="취소" className="secondary-button" />
            <Btn type="submit" label="확인" />
          </div>
        </form>
      </div>
    </Styled.EditProfileContainer>
  );
}
