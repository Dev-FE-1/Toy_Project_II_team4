import React, { useState } from 'react';
import IconBtn from '../../components/iconButton/IconButton';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateSchedule, deleteSchedule } from '../../slices/scheduleSlice';

interface ISchedule {
  dateId: number;
  category: string;
  scheduleType: 'company' | 'personal';
  description: string;
  title: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

interface ScheduleDetailModalProps {
  schedule: ISchedule;
  onClose: () => void;
}

export function ScheduleDetailModal({ schedule, onClose }: ScheduleDetailModalProps): JSX.Element {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedSchedule, setEditedSchedule] = useState<ISchedule>(schedule);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSchedule = () => {
    dispatch<AppDispatch>(updateSchedule(editedSchedule));
    setIsEditing(false);
  };

  const handleDeleteSchedule = () => {
    if (window.confirm('정말로 이 일정을 삭제하시겠습니까?')) {
      dispatch(deleteSchedule(schedule.dateId));
      onClose();
    }
  };

  return (
    <ModalWrapper onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <ActionButtons>
            {isEditing ? (
              <>
                <ActionButton onClick={handleUpdateSchedule}>저장</ActionButton>
                <ActionButton onClick={() => setIsEditing(false)}>취소</ActionButton>
              </>
            ) : (
              <>
                <IconBtn icontype="edit" onClick={() => setIsEditing(true)} />
                <IconBtn icontype="delete" onClick={handleDeleteSchedule} />
              </>
            )}
          </ActionButtons>
        </ModalHeader>
        <ModalBody>
          {isEditing ? (
            <EditForm>
              <input
                type="text"
                name="title"
                value={editedSchedule.title}
                onChange={handleInputChange}
                placeholder="제목"
                required
              />
              <select
                name="category"
                value={editedSchedule.category}
                onChange={handleInputChange}
                required
              >
                <option value="">카테고리 선택</option>
                {['공연', '팬 이벤트', '방송 출연', '촬영'].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                name="scheduleType"
                value={editedSchedule.scheduleType}
                onChange={handleInputChange}
                required
              >
                <option value="company">회사</option>
                <option value="personal">개인</option>
              </select>
              <input
                type="date"
                name="startDate"
                value={editedSchedule.startDate}
                onChange={handleInputChange}
                required
              />
              <input
                type="time"
                name="startTime"
                value={editedSchedule.startTime}
                onChange={handleInputChange}
                required
              />
              <input
                type="date"
                name="endDate"
                value={editedSchedule.endDate}
                onChange={handleInputChange}
                required
              />
              <input
                type="time"
                name="endTime"
                value={editedSchedule.endTime}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="description"
                value={editedSchedule.description}
                onChange={handleInputChange}
                placeholder="설명"
              />
            </EditForm>
          ) : (
            <>
              <ScheduleCategory>{schedule.category}</ScheduleCategory>
              <ScheduleTitle>{schedule.title}</ScheduleTitle>
              <p>
                시작: {schedule.startDate} {schedule.startTime}
              </p>
              <p>
                종료: {schedule.endDate} {schedule.endTime}
              </p>
              <br />
              <p>설명: {schedule.description}</p>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ModalContent = styled.div`
  border: 1px solid var(--border-sec);
  background-color: white;
  padding: 20px;
  padding-bottom: 100px;
  width: 100%;
  max-width: 568px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ActionButtons = styled.div`
  button {
    margin-left: 10px;
  }
  svg {
    font-size: var(--font-size-large);
  }
`;

const ModalBody = styled.div`
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 5px;
  }
`;

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const ScheduleCategory = styled.span`
  background-color: #dc5f00;
  color: white;
  padding: 0.4rem;
  border-radius: 10px;
`;
const ScheduleTitle = styled.h2`
  display: inline-block;
  margin-bottom: 14px;
  margin-left: 5px;
`;

export const ActionButton = styled.button``;
const CloseButton = styled.button`
  font-size: var(--font-size-xlarge);
  cursor: pointer;
`;
