import { Label, TextInput } from "./styles";

interface IInput {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  secureTextEntry?: boolean;
  marginBottom?: number;
}

export const Input = ({
  value,
  onChange,
  label,
  secureTextEntry,
  marginBottom,
}: IInput): JSX.Element => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <TextInput
        marginBottom={marginBottom}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChange}
      />
    </>
  );
};
