import React, { useState } from "react";
import TextField from "@mui/material/TextField";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
}) => {
  const formatPhoneNumber = (input: string): string => {
    const phoneNumber = input.replace(/\D/g, "");

    if (phoneNumber.length >= 10) {
      const formattedPhoneNumber = `+${phoneNumber.slice(
        0,
        3
      )}${phoneNumber.slice(3, 5)}${phoneNumber.slice(5, 8)}${phoneNumber.slice(
        8,
        10
      )}${phoneNumber.slice(10, 12)}`;
      return formattedPhoneNumber;
    }

    return phoneNumber;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(event.target.value);
    onChange(formattedValue);
  };

  return (
    <TextField
      label="Phone Number"
      variant="outlined"
      fullWidth
      value={value}
      onChange={handleInputChange}
      placeholder="+998 (99) 999-99-99"
    />
  );
};

export default PhoneNumberInput;
