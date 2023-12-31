import { useState } from "react";
import { Alert } from "react-native";
import {
  Container,
  Label,
  LogoLabel,
  LogoWrapper,
  MainLabel,
  ScrollView,
} from "./styles";
import { Button, FlexContainer, Input } from "../../components";
import { schemaLogin } from "../../helpers/login";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

export const Login = (): JSX.Element => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [viewPassword, setViewPassword] = useState(false);

  const validateFields = async () => {
    try {
      await schemaLogin.validate({ userName, password }, { abortEarly: false });
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const validateLogin = () => {
    //mocked data for login
    if (userName === "tester" && password === "tester123") return true;
    else return false;
  };

  const onSubmit = async () => {
    if (await validateFields()) {
      if (validateLogin()) {
        navigation.navigate("HelpCenter");
      } else {
        Alert.alert("Nome de usuário ou senha incorretos!");
      }
    }
  };

  return (
    <>
      <ScrollView>
        <Container>
          <FlexContainer>
            <LogoWrapper>
              <LogoLabel>Logo</LogoLabel>
            </LogoWrapper>
            <MainLabel>Bem-vindo ao{"\n"}Portal do Usuário</MainLabel>
            <Label fontWeight={600}>Digite seus dados de acesso</Label>
          </FlexContainer>
          <FlexContainer>
            <Input
              label="Usuário"
              testId="user-input"
              value={userName}
              onChange={setUserName}
              marginBottom={10}
              error={errors?.userName}
            />
            <Input
              label="Senha"
              value={password}
              testId="password-input"
              onChange={setPassword}
              secureTextEntry={!viewPassword}
              marginBottom={10}
              iconName={viewPassword ? "eye-off" : "eye"}
              error={errors?.password}
              onClickIcon={() => setViewPassword(!viewPassword)}
            />
            <FlexContainer flexDirection="row">
              <Label>Esqueceu sua senha? </Label>
              <Label fontWeight={800} color={theme.fontsColor.primary}>
                Recuperar senha
              </Label>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer>
            <Button
              label="Acessar"
              variant="primary"
              onPress={() => onSubmit()}
            />
            <Button label="Cadastrar-se" variant="outlined" marginTop={10} />
          </FlexContainer>
        </Container>
      </ScrollView>
    </>
  );
};
