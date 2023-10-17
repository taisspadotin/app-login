import { useState } from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import { Button, Input } from "../../components";

export const Login = (): JSX.Element => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Container>
        <Text>Logo</Text>
        <Text>Bem-vindo ao Portal do Usuário</Text>
        <Text>Digite seus dados de acesso</Text>
        <Input label="Usuário" value={userName} onChange={setUserName} />
        <Input
          label="Senha"
          value={password}
          onChange={setPassword}
          secureTextEntry
        />
        <Text>Esqueceu sua senha? Recuperar senha</Text>
        <Button label="Acessar" variant="primary" />
        <Button label="Cadastrar-se" variant="outlined" marginTop={10} />
      </Container>
    </>
  );
};
