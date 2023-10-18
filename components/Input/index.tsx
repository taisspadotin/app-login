import { useTheme } from "styled-components/native";
import { Container, IconContent, Label, TextInput } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface IInput {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  secureTextEntry?: boolean;
  marginBottom?: number;
  marginTop?: number;
  error?: string;
  placeholder?: string;
  iconName?: string;
  onClickIcon?: () => void;
  iconIsLeft?: boolean;
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
  iconName,
  onClickIcon,
  iconIsLeft,
}: IInput): JSX.Element => {
  const theme = useTheme();

  return (
    <Container>
      {label && <Label>{label}</Label>}
      {iconName && (
        <IconContent
          top={!!label ? 32 : 15}
          iconIsLeft={iconIsLeft}
          onPress={() => {
            onClickIcon && onClickIcon();
          }}
        >
          <Ionicons
            name={iconName}
            size={20}
            color={theme.fontsColor.primary}
          />
        </IconContent>
      )}
      <TextInput
        marginBottom={!!error ? 0 : marginBottom}
        marginTop={marginTop}
        secureTextEntry={secureTextEntry}
        value={value}
        paddingLeft={iconName && iconIsLeft ? 35 : 5}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={theme.fontsColor.secondary}
      />
      {error && (
        <Label isError marginBottom={marginBottom}>
          {error}
        </Label>
      )}
    </Container>
  );
};
