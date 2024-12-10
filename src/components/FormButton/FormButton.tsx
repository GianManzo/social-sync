"use client";

import { useFormStatus } from "react-dom";

import { Button } from "./form-button.styles";

type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const FormButton = ({
  children = "Entrar",
  ...props
}: FormButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} disabled={pending}>
      {children}
    </Button>
  );
};
