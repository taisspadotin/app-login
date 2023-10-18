import { Label, TextInput } from "./styles";

interface IInput {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  secureTextEntry?: boolean;
  marginBottom?: number;
  marginTop?: number;
  error?: string;
  placeholder?: string;
}

export const Input = ({
  value,
  onChange,
  label,
  secureTextEntry,
  marginBottom,
  error,
  placeholder,
  marginTop,
}: IInput): JSX.Element => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput
        marginBottom={!!error ? 0 : marginBottom}
        marginTop={marginTop}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
      />
      {error && (
        <Label isError marginBottom={marginBottom}>
          {error}
        </Label>
      )}
    </>
  );
};
