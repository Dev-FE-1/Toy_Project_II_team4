interface ScheduleCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function ScheduleCheckbox({
  label,
  checked,
  onChange,
}: ScheduleCheckboxProps): JSX.Element {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}
