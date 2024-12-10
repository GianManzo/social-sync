import {
  ErrorMessage,
  FormImputContainer,
  Input,
  Label,
} from "./form-input.styles";

interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = ({ label, error, ...props }: IFormInput) => {
  return (
    <FormImputContainer>
      <Label htmlFor={props.name}>{label}</Label>
      <Input {...props} id={props.name} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormImputContainer>
  );
};
