import { useState } from "react";
import { Input } from "../../components";
import { Container, Label } from "./styles";

export const HelpCenter = (): JSX.Element => {
  const [searchedValue, setSearchedValue] = useState("");
  return (
    <Container>
      <Label>Como podemos lhe ajudar?</Label>
      <Input
        marginTop={5}
        value={searchedValue}
        onChange={setSearchedValue}
        placeholder="Pesquise aqui..."
      />
    </Container>
  );
};
