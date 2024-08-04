import React, { useState } from 'react';

interface ISchedule {
  dateId: number;
  category: string; // 기존 category 유지
  scheduleType: 'company' | 'personal'; // 새로운 키 추가
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

export const AddScheduleModal: React.FC<IAddScheduleModalProps> = ({
  isOpen,
  onClose,
  onAddSchedule,
}) => {
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
            type="text"
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
  );
};
