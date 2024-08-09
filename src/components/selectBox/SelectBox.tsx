import {
  Box,
  Select,
  SelectChangeEvent,
  SelectProps,
  FormControl,
  MenuItem,
  InputLabel,
} from '@mui/material';
import { useState } from 'react';

function SelectBox({ menuItems, labelId, id, label, ...props }: SelectBoxProps) {
  const [selected, setselected] = useState<string | number>('');
  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setselected(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={labelId} htmlFor={id}>
          {label}
        </InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={selected}
          label={label}
          onChange={handleChange}
          {...props}
        >
          {menuItems.map((item, i) => (
            <MenuItem key={i} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

interface Option {
  text: string;
  value: string | number;
}

interface SelectBoxProps extends Omit<SelectProps<string | number>, 'children'> {
  labelId: string;
  id: string;
  label: string;
  menuItems: Option[];
}
export default SelectBox;
