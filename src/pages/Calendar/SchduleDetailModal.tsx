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
  console.log(schedule);
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
                <button onClick={handleUpdateSchedule}>저장</button>
                <button onClick={() => setIsEditing(false)}>취소</button>
              </>
            ) : (
              <>
                <IconBtn icontype="edit" onClick={() => setIsEditing(true)} />
                <IconBtn icontype="delete" onClick={handleDeleteSchedule} />
              </>
            )}
          </ActionButtons>
        </ModalHeader>
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
          <ScheduleDetailWrapper>
            <p className={`category  ${schedule.category.replace(' ', '-')}`}>
              {schedule.category}
            </p>
            <p className="title">{schedule.title}</p>
            <p className="start-date">
              {schedule.startDate.slice(5, 7)}월 {schedule.startDate.slice(-2)}일{' '}
              {+schedule.startTime.slice(0, 2) > 12
                ? `오후 ${(+schedule.startTime.slice(0, 2) - 12).toString().padStart(2, '0')}${schedule.startTime.slice(-3)}`
                : `오전 ${schedule.startTime}`}
              ~
            </p>
            <p className="end-date">
              {schedule.endDate.slice(5, 7)}월 {schedule.endDate.slice(-2)}일{' '}
              {+schedule.endTime.slice(0, 2) > 12
                ? `오후 ${(+schedule.endTime.slice(0, 2) - 12).toString().padStart(2, '0')}${schedule.endTime.slice(-3)}`
                : `오전 ${schedule.endTime}`}
            </p>
            <p className="description">{schedule.description}</p>
          </ScheduleDetailWrapper>
        )}
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

const EditForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScheduleDetailWrapper = styled.div`
  p {
    margin-bottom: 1rem;
  }
  .category {
    display: inline-block;
    padding: 6px 8px;
    font-weight: bold;
    border-radius: 8px;
    color: var(--font-pri);
    font-size: 1.4rem;
    margin-bottom: 2rem;

    &.방송-출연 {
      background-color: #3473e14d;
    }
    &.촬영 {
      background-color: #ffcb344d;
    }
    &.팬-이벤트 {
      background-color: #039c004d;
    }
    &.공연 {
      background-color: #dc5f004d;
    }
    &.개인 {
      background-color: #ddddddb2;
    }
  }
  .title {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .end-date {
    margin-bottom: 4rem;
  }
`;

const CloseButton = styled.button`
  font-size: var(--font-size-xlarge);
  cursor: pointer;
`;
