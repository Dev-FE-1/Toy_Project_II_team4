import { useLogout } from '../../hooks/useLogout';
import { useState } from 'react';
import { ProfileType } from './MyPageView';

export function useMyPage() {
  const { handleLogout } = useLogout();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '김지훈',
    message: '언제든지 긍정적인 마인드로!😆😆',
    email: 'jihoon@sajo.com',
    phone: '010-1234-1234',
    position: '관리 2팀/로드 매니저',
    responsibility: '블루핑크 담당',
  });

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);

  // TODO handleSave 함수 내에서 입력값 유효성 검사 및 오류 처리를 구현하세요.
  const handleSave = (updatedProfile: ProfileType) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  return { handleLogout, isEditing, profile, handleEdit, handleCancel, handleSave };
}
