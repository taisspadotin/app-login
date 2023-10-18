import { useState } from "react";
import { Text } from "react-native";
import { Container, MainLabel } from "./styles";
import { Button, FlexContainer, Input } from "../../components";

export const Login = (): JSX.Element => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Container>
        <FlexContainer>
          <Text>Logo</Text>
          <MainLabel>Bem-vindo ao{"\n"}Portal do Usuário</MainLabel>
          <Text>Digite seus dados de acesso</Text>
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
          <Text>Esqueceu sua senha? Recuperar senha</Text>
        </FlexContainer>
        <FlexContainer>
          <Button label="Acessar" variant="primary" />
          <Button label="Cadastrar-se" variant="outlined" marginTop={10} />
        </FlexContainer>
      </Container>
    </>
  );
};
