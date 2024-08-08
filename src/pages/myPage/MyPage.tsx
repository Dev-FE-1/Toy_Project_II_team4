import { MyPageView } from './MyPageView';
import { useMyPage } from './useMyPage';

export function MyPage() {
  const { handleLogout, isEditing, profile, handleEdit, handleCancel, handleSave } = useMyPage();

  return (
    <MyPageView
      handleLogout={handleLogout}
      isEditing={isEditing}
      profile={profile}
      handleEdit={handleEdit}
      handleCancel={handleCancel}
      handleSave={handleSave}
    />
  );
}
