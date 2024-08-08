import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { addSchedule, ISchedule } from '../../slices/scheduleSlice';
import BasicDialog from '../../components/modal/BasicModal';
import styled from 'styled-components';
import SelectBox from '../../components/selectBox/SelectBox';
import Btn from '../../components/button/Button';
import { TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Form } from 'react-router-dom';
import SDataPicker from '../../components/datepicker/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { SelectChangeEvent } from '@mui/material/Select';

interface AddScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const categoryOptions = [
  { text: '공연', value: '공연' },
  { text: '팬 이벤트', value: '팬 이벤트' },
  { text: '방송 출연', value: '방송 출연' },
  { text: '촬영', value: '촬영' },
];

export function AddScheduleModal({ isOpen, onClose }: AddScheduleModalProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const [newSchedule, setNewSchedule] = useState<ISchedule>({
    dateId: Date.now(),
    category: '공연',
    scheduleType: 'company',
    description: '',
    title: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  const handleInputChange = (
    e:
      | SelectChangeEvent<string | number | HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewSchedule((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string) => (date: dayjs.Dayjs | null) => {
    if (date) {
      setNewSchedule((prev) => ({ ...prev, [name]: date.format('YYYY-MM-DD') }));
    }
  };

  const handleTimeChange = (name: string) => (time: dayjs.Dayjs | null) => {
    if (time) {
      setNewSchedule((prev) => ({ ...prev, [name]: time.format('HH:mm') }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addSchedule(newSchedule));

    setNewSchedule({
      dateId: 0,
      category: '공연',
      scheduleType: 'company',
      description: '',
      title: '',
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
    });
    onClose();
  };

  return (
    <BasicDialog
      open={isOpen}
      modalCloseButton={<CloseButton handleClose={onClose} sx={{ fontSize: '1.5rem' }} />}
    >
      <ModalWrapper>
        <ModalHeader>
          <TitleContainer>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <Heading>일정 추가</Heading>
          </TitleContainer>
          <Btn
            type="button"
            label="추가"
            btnsize="sm"
            sx={{ fontSize: '1.6rem' }}
            onClick={handleSubmit}
          />
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <TextField
            label="제목"
            fullWidth
            sx={{ mb: '2rem', fontSize: '1.6rem' }}
            name="title"
            value={newSchedule.title}
            onChange={handleInputChange}
            required
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
          />
          <RadioGroup
            row
            name="scheduleType"
            value={newSchedule.scheduleType}
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
          {newSchedule.scheduleType === 'company' && (
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
              value={newSchedule.category}
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
                onChange={handleDateChange('startDate')}
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
                onChange={handleTimeChange('startTime')}
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
                onChange={handleDateChange('endDate')}
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
                onChange={handleTimeChange('endTime')}
                required
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
            value={newSchedule.description}
            onChange={handleInputChange}
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />
        </Form>
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
  margin-bottom: 4rem;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
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
const CloseButton = styled.button`
  font-size: var(--font-size-xlarge);
  cursor: pointer;
`;

const Heading = styled.h2`
  font-size: var(--font-size-xlarge);
  font-weight: bold;
`;
export default AddScheduleModal;
