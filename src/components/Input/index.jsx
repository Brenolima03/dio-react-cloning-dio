import React from "react";
import { Controller } from "react-hook-form";
import { InputContainer, InputText, IconContainer, ErrorText } from "./styles";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <div> 
      {/* Placeholder for error message to avoid layout shift */}
      <ErrorText showPlaceholder={!errorMessage}>
        {errorMessage || "\u00A0" /* Non-breaking space as placeholder */}
      </ErrorText>
      <InputContainer>
        {leftIcon && <IconContainer>{leftIcon}</IconContainer>}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
    </div>
  );
};
export { Input };
