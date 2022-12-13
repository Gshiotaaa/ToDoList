import { Check } from "phosphor-react";
import "./styles.css";

interface CheckBoxProps {
  checked: boolean;
  setChecked: () => void;
}

export function CheckBox({ checked, setChecked }: CheckBoxProps) {
  return (
    <div
      className={`checkBox ${checked && "checkedStyle"}`}
      onClick={() => setChecked()}
    >
      {checked && <Check />}
    </div>
  );
}
