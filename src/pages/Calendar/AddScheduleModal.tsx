import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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

interface AddScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSchedule: (schedule: ISchedule) => void;
}

const categoryOptions = ['공연', '팬 이벤트', '방송 출연', '촬영'];

export function AddScheduleModal({
  isOpen,
  onClose,
  onAddSchedule,
}: AddScheduleModalProps): JSX.Element | null {
  const schedules: ISchedule[] = useSelector((state: RootState) => state.schedules.schedules);

  const [newSchedule, setNewSchedule] = useState<ISchedule>({
    dateId: schedules.length + 1,
    category: '',
    scheduleType: 'company',
    description: '',
    title: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSchedule(newSchedule);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalWrapper onClick={handleOverlayClick}>
      <ModalContent>
        <ModalHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <ActionButtons>
            <button type="submit" onClick={handleSubmit}>
              추가
            </button>
          </ActionButtons>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={newSchedule.title}
              onChange={handleInputChange}
              placeholder="제목"
              required
            />
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="scheduleType"
                  value="company"
                  checked={newSchedule.scheduleType === 'company'}
                  onChange={handleInputChange}
                  required
                />
                회사
              </label>
              <label>
                <input
                  type="radio"
                  name="scheduleType"
                  value="personal"
                  checked={newSchedule.scheduleType === 'personal'}
                  onChange={handleInputChange}
                  required
                />
                개인
              </label>
            </div>
            {newSchedule.scheduleType === 'company' && (
              <select
                name="category"
                value={newSchedule.category}
                onChange={handleInputChange}
                required
              >
                <option value="">카테고리 선택</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            )}
            <textarea
              name="description"
              value={newSchedule.description}
              onChange={handleInputChange}
              placeholder="설명"
            />
            <input
              type="date"
              name="startDate"
              value={newSchedule.startDate}
              onChange={handleInputChange}
              required
            />
            <input
              type="time"
              name="startTime"
              value={newSchedule.startTime}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="endDate"
              value={newSchedule.endDate}
              onChange={handleInputChange}
              required
            />
            <input
              type="time"
              name="endTime"
              value={newSchedule.endTime}
              onChange={handleInputChange}
              required
            />
          </form>
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
  border: 1px solid var(--border-pri);
  background-color: white;
  padding: 20px;
  padding-bottom: 100px;
  max-width: 568px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ActionButtons = styled.div`
  button {
    margin-left: 10px;
  }
`;

const ModalBody = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  input,
  textarea,
  select {
    margin-bottom: 10px;
    padding: 5px;
  }

  .radio-group {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .radio-group label {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
