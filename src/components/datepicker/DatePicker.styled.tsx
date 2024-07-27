import styled from 'styled-components';

export const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Separator = styled.span`
  margin: 0 10px; 
  font-size: 1.2rem; 
  color: #000; 
`;

export const DTPstyle = {
  day:{
    sx:{
      "&.MuiPickersDay-root.Mui-selected" :{
        backgroundColor : '#DC5F00'
      }
    }
  },
  textField:{
    sx:{
      width:'170px',
      '& .MuiInputBase-root': {
        height: '100%',
      },
      '& .MuiInputBase-input': {
        height: '0.25rem',
      },
      '& .MuiFormLabel-root': {
        fontSize:'1rem',
        lineHeight:'0.9rem',
      },
      '& .MuiFormControl-root': {
        padding:'0.3rem'
      },
      '& .MuiButtonBase-root':{
        padding:'8px',
      }
    }   
  }
}
