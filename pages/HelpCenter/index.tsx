import { useEffect, useState } from "react";
import { Accordion, Input } from "../../components";
import { Container, Label, PopularTopics } from "./styles";
import axios from "axios";

export const HelpCenter = (): JSX.Element => {
  const [searchedValue, setSearchedValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        setData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Label>Como podemos lhe ajudar?</Label>
      <Input
        marginTop={5}
        value={searchedValue}
        onChange={setSearchedValue}
        placeholder="Pesquise aqui..."
      />

      <PopularTopics>Tópicos populares</PopularTopics>
      {data?.map((item) => (
        <Accordion key={item?.id} title={item?.title} text={item?.body} />
      ))}
    </Container>
  );
};
