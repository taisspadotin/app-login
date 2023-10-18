import { useState } from "react";
import { Alert, Text } from "react-native";
import { Container, Label, LogoLabel, LogoWrapper, MainLabel } from "./styles";
import { Button, FlexContainer, Input } from "../../components";
import { schemaLogin } from "../../helpers/login";
import { useNavigation } from "@react-navigation/native";

export const Login = (): JSX.Element => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

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
        //TODO: Protect routes
        navigation.navigate("HelpCenter");
      } else {
        Alert.alert("Nome de usuário ou senha incorretos!");
      }
    }
  };

  return (
    <>
      <Container>
        <FlexContainer>
          <LogoWrapper>
            <LogoLabel>Logo</LogoLabel>
          </LogoWrapper>
          <MainLabel>Bem-vindo ao{"\n"}Portal do Usuário</MainLabel>
          <Label>Digite seus dados de acesso</Label>
        </FlexContainer>
        <FlexContainer>
          <Input
            label="Usuário"
            value={userName}
            onChange={setUserName}
            marginBottom={10}
            error={errors?.userName}
          />
          <Input
            label="Senha"
            value={password}
            onChange={setPassword}
            secureTextEntry
            marginBottom={10}
            error={errors?.password}
          />
          <FlexContainer flexDirection="row">
            <Label>Esqueceu sua senha? </Label>
            <Label fontWeight={800}>Recuperar senha</Label>
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
    </>
  );
};
