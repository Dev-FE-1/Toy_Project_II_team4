import React, { useState } from 'react';
import styled from 'styled-components';
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
interface IAddScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSchedule: (schedule: ISchedule) => void;
}

export function AddScheduleModal({ isOpen, onClose, onAddSchedule }: IAddScheduleModalProps) {
  const [newSchedule, setNewSchedule] = useState<ISchedule>({
    dateId: Date.now(),
    category: '',
    scheduleType: 'company',
    description: '',
    title: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSchedule(newSchedule);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AddScheduleModalWrapper>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>일정 추가</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={newSchedule.title}
              onChange={handleInputChange}
              placeholder="제목"
              required
            />
            <input
              type="se"
              name="category"
              value={newSchedule.category}
              onChange={handleInputChange}
              placeholder="카테고리"
              required
            />
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
            <button type="submit">추가</button>
            <button type="button" onClick={onClose}>
              취소
            </button>
          </form>
        </div>
      </div>
    </AddScheduleModalWrapper>
  );
}

export const AddScheduleModalWrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 40%;
    position: absolute;
    bottom: 0;
    padding-bottom: 120px;
    height: 50%;
  }

  .modal-content form {
    display: flex;
    flex-direction: column;
  }

  .modal-content input,
  .modal-content textarea {
    margin-bottom: 10px;
    padding: 5px;
  }

  .modal-content button {
    margin-top: 10px;
  }
`;
