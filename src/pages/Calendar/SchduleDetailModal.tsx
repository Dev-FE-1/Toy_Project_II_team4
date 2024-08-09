import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSchedule, deleteSchedule, ISchedule } from '../../slices/scheduleSlice';
import { AppDispatch } from '../../store/store';
import BasicDialog from '../../components/modal/BasicModal';
import Btn from '../../components/button/Button';
import IconBtn from '../../components/iconButton/IconButton';
import styled from 'styled-components';
import { TextField, RadioGroup, FormControlLabel, Radio, SelectChangeEvent } from '@mui/material';
import { Form } from 'react-router-dom';
import SelectBox from '../../components/selectBox/SelectBox';
import SDataPicker from '../../components/datepicker/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

interface ScheduleDetailModalProps {
  schedule: ISchedule;
  onClose: () => void;
}
const categoryOptions = [
  { text: '공연', value: '공연' },
  { text: '팬 이벤트', value: '팬 이벤트' },
  { text: '방송 출연', value: '방송 출연' },
  { text: '촬영', value: '촬영' },
];

export function ScheduleDetailModal({ schedule, onClose }: ScheduleDetailModalProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);
  const [editedSchedule, setEditedSchedule] = useState<ISchedule>(schedule);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | SelectChangeEvent<string | number | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSchedule = async () => {
    try {
      await dispatch(updateSchedule(editedSchedule)).unwrap();
      setIsEditing(false);
      onClose();
    } catch (error) {
      console.error('==> ', error);
    }
  };

  const handleDeleteSchedule = async () => {
    if (window.confirm('정말로 이 일정을 삭제하시겠습니까?')) {
      try {
        await dispatch(deleteSchedule(schedule.dateId)).unwrap();
        onClose();
      } catch (error) {
        console.error('==> ', error);
      }
    }
  };

  return (
    <BasicDialog open={true} onClose={onClose}>
      <ModalWrapper>
        <ModalHeader>
          <TitleContainer>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <Heading>{isEditing ? '일정 수정' : ''}</Heading>
          </TitleContainer>
          {isEditing ? (
            <Btn
              type="button"
              label="완료"
              btnsize="sm"
              sx={{ fontSize: '1.6rem' }}
              onClick={handleUpdateSchedule}
            />
          ) : (
            <ActionButtons>
              <IconBtn icontype="edit" onClick={() => setIsEditing(true)} />
              <IconBtn icontype="delete" onClick={handleDeleteSchedule} />
            </ActionButtons>
          )}
        </ModalHeader>
        {isEditing ? (
          <Form>
            <TextField
              label="제목"
              fullWidth
              sx={{ mb: '2rem', fontSize: '1.6rem' }}
              name="title"
              value={editedSchedule.title}
              onChange={handleInputChange}
              required
              InputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
            />
            <RadioGroup
              row
              name="scheduleType"
              value={editedSchedule.scheduleType}
              onChange={handleInputChange}
              sx={{
                mb: '2rem',
                '& .MuiFormControlLabel-label': {
                  fontSize: 'var(--font-size-large)',
                },
              }}
            >
              <FormControlLabel value="company" control={<Radio />} label="회사" />
              <FormControlLabel value="personal" control={<Radio />} label="개인" />
            </RadioGroup>
            {editedSchedule.scheduleType === 'company' && (
              <SelectBox
                labelId="labelCate"
                id="category"
                label="카테고리"
                menuItems={categoryOptions}
                sx={{
                  marginBottom: '20px',
                  fontSize: '1.4rem',
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      '& .MuiMenuItem-root': {
                        fontSize: 'var(--font-size-primary)',
                      },
                    },
                  },
                }}
                value={editedSchedule.category}
                onChange={handleInputChange}
                name="category"
                required
              />
            )}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimeContainer>
                <SDataPicker
                  label="시작 날짜"
                  dateType="single"
                  slotProps={{
                    layout: {
                      sx: {
                        width: '100%',
                        '& .MuiDayCalendar-weekDayLabel': {
                          fontSize: 'var(--font-size-small)',
                        },
                        '& .MuiPickersCalendarHeader-labelContainer': {
                          fontSize: 'var(--font-size-primary)',
                        },
                        '& .MuiPickersDay-root': {
                          fontSize: 'var(--font-size-small)',
                        },
                      },
                    },
                    textField: {
                      sx: {
                        '& .MuiInputBase-input': {
                          fontSize: 'var(--font-size-primary)',
                        },
                        '& .MuiFormLabel-root.MuiInputLabel-root': {
                          fontSize: 'var(--font-size-small)',
                        },
                      },
                    },
                    calendarHeader: {
                      format: 'YYYY-MM',
                    },
                  }}
                  format="YYYY-MM-DD"
                  name="startDate"
                  value={dayjs(editedSchedule.startDate)}
                  onChange={(newValue) =>
                    setEditedSchedule((prev) => ({
                      ...prev,
                      startDate: newValue ? newValue.format('YYYY-MM-DD') : '',
                    }))
                  }
                />
                <TimePicker
                  label="시작 시간"
                  slotProps={{
                    layout: {
                      sx: {
                        width: '100%',
                        '& .MuiDialogActions-root .MuiButtonBase-root': {
                          fontSize: 'var(--font-size-primary)',
                          margin: '0 auto',
                          width: '100%',
                        },
                        '& .MuiDialogActions-root .MuiButtonBase-root:first-child': {
                          background: 'var(--color-sec)',
                          color: 'var(--color-pri)',
                        },
                        '& .MuiMultiSectionDigitalClockSection-item': {
                          fontSize: 'var(--font-size-primary)',
                        },
                      },
                    },
                    textField: {
                      sx: {
                        '& .MuiInputBase-input': {
                          fontSize: 'var(--font-size-primary)',
                        },
                        '& .MuiFormLabel-root.MuiInputLabel-root': {
                          fontSize: 'var(--font-size-small)',
                        },
                      },
                    },
                  }}
                  ampm={false}
                  name="startTime"
                  value={dayjs(`2023-01-01T${editedSchedule.startTime}`)}
                  onChange={(newValue) =>
                    setEditedSchedule((prev) => ({
                      ...prev,
                      startTime: newValue ? newValue.format('HH:mm') : '',
                    }))
                  }
                />
              </DateTimeContainer>
              <DateTimeContainer>
                <SDataPicker
                  label="종료 날짜"
                  dateType="single"
                  slotProps={{
                    layout: {
                      sx: {
                        width: '100%',
                        '& .MuiDayCalendar-weekDayLabel': {
                          fontSize: 'var(--font-size-small)',
                        },
                        '& .MuiPickersCalendarHeader-labelContainer': {
                          fontSize: 'var(--font-size-primary)',
                        },
                        '& .MuiPickersDay-root': {
                          fontSize: 'var(--font-size-small)',
                        },
                      },
                    },
                    textField: {
                      sx: {
                        '& .MuiInputBase-input': {
                          fontSize: 'var(--font-size-primary)',
                        },
                        '& .MuiFormLabel-root.MuiInputLabel-root': {
                          fontSize: 'var(--font-size-small)',
                        },
                      },
                    },
                    calendarHeader: {
                      format: 'YYYY-MM',
                    },
                  }}
                  format="YYYY-MM-DD"
                  name="endDate"
                  value={dayjs(editedSchedule.endDate)}
                  onChange={(newValue) =>
                    setEditedSchedule((prev) => ({
                      ...prev,
                      endDate: newValue ? newValue.format('YYYY-MM-DD') : '',
                    }))
                  }
                />
                <TimePicker
                  label="종료 시간"
                  slotProps={{
                    layout: {
                      sx: {
                        width: '100%',
                        '& .MuiDialogActions-root .MuiButtonBase-root': {
                          fontSize: 'var(--font-size-primary)',
                          margin: '0 auto',
                          width: '100%',
                        },
                        '& .MuiDialogActions-root .MuiButtonBase-root:first-child': {
                          background: 'var(--color-sec)',
                          color: 'var(--color-pri)',
                        },
                        '& .MuiMultiSectionDigitalClockSection-item': {
                          fontSize: 'var(--font-size-primary)',
                        },
                      },
                    },
                    textField: {
                      sx: {
                        '& .MuiInputBase-input': {
                          fontSize: 'var(--font-size-primary)',
                        },
                        '& .MuiFormLabel-root.MuiInputLabel-root': {
                          fontSize: 'var(--font-size-small)',
                        },
                      },
                    },
                  }}
                  ampm={false}
                  name="endTime"
                  value={dayjs(`2023-01-01T${editedSchedule.endTime}`)}
                  onChange={(newValue) =>
                    setEditedSchedule((prev) => ({
                      ...prev,
                      endTime: newValue ? newValue.format('HH:mm') : '',
                    }))
                  }
                />
              </DateTimeContainer>
            </LocalizationProvider>
            <TextField
              label="설명"
              multiline
              rows={4}
              fullWidth
              sx={{ mt: '2rem', fontSize: '1.6rem' }}
              name="description"
              value={editedSchedule.description}
              onChange={handleInputChange}
              InputProps={{ style: { fontSize: 16 } }}
              InputLabelProps={{ style: { fontSize: 16 } }}
            />
          </Form>
        ) : (
          <ScheduleDetailWrapper>
            <p className={`category ${schedule.category.replace(' ', '-')}`}>{schedule.category}</p>
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
      </ModalWrapper>
    </BasicDialog>
  );
}

const ModalWrapper = styled.div`
  font-size: 1.6rem;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const DateTimeContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  > * {
    flex: 1;
  }
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

const Heading = styled.h2`
  font-size: var(--font-size-xlarge);
  font-weight: bold;
`;
