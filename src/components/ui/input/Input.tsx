import { debounce } from "lodash";
import React, { useCallback } from "react";
import { IconEnum } from "src/models/ui";
import { UISvgIcon } from "../icon/Icon";
import styles from "./Input.module.scss";

interface InputProps {
  amountCharacters?: number;
  debounceTime?: number;
  defaultValue?: string;
  id?: string;
  hasSearch?: boolean;
  placeHolder?: string;
  width?: String;
  onChange: (text: string) => void;
}

const UIInput: React.FC<InputProps> = ({
  amountCharacters = 1,
  debounceTime = 300,
  defaultValue = "",
  id = "input",
  hasSearch = false,
  placeHolder = "Buscar contacto ...",
  width = "28vw",
  onChange,
}) => {
  const debouncedSave = useCallback(
    debounce((nextValue) => onChange(nextValue), debounceTime),
    []
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target;
    if (nextValue.length >= amountCharacters) debouncedSave(nextValue);
  };
  return (
    <span className={`beetrack-input-container ${hasSearch ? styles.search : ""}`}>
      <input
        aria-label="input"
        id={id}
        type="text"
        defaultValue={defaultValue}
        className={`${styles.inputContainer} beetrack-input-primary`}
        placeholder={placeHolder}
        style={{ width: `${width}` }}
        onChange={handleChange}
      />
      {hasSearch && (
        <UISvgIcon
          name={IconEnum.Search}
          width="18"
          height="18"
          className="beetrack-fill-primary"
        />
      )}
    </span>
  );
};

export { UIInput };
