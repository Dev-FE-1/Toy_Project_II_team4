import { useState } from 'react';

export function useNavBar(selectedItem: string) {
  const [selected, setSelected] = useState(selectedItem);
  return { selected, setSelected };
}
