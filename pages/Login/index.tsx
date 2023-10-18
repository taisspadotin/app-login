import { useState } from "react";
import { Text } from "react-native";
import { Container, Label, LogoLabel, LogoWrapper, MainLabel } from "./styles";
import { Button, FlexContainer, Input } from "../../components";

export const Login = (): JSX.Element => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    //TODO: Validate errors
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
          />
          <Input
            label="Senha"
            value={password}
            onChange={setPassword}
            secureTextEntry
            marginBottom={10}
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
