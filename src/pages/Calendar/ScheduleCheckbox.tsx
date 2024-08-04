interface ScheduleCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const ScheduleCheckbox: React.FC<ScheduleCheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
};

export default ScheduleCheckbox;
