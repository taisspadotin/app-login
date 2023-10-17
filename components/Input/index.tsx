import { Label, TextInput } from "./styles";

interface IInput {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  secureTextEntry?: boolean;
}

export const Input = ({
  value,
  onChange,
  label,
  secureTextEntry,
}: IInput): JSX.Element => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChange}
      />
    </>
  );
};
