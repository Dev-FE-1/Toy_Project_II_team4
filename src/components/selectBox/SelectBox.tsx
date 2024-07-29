import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useState } from 'react';
// import * as styled from './SelectBox.style';
function SelectBox({ labelId, id, label, menuItems }: SelectBoxProps) {
  const [selected, setselected] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setselected(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select labelId={labelId} id={id} value={selected} label={label} onChange={handleChange}>
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

interface MenuItem {
  text: string;
  value: string | number;
}
interface SelectBoxProps {
  labelId: string;
  id: string;
  label: string;
  menuItems: MenuItem[];
}

export default SelectBox;
