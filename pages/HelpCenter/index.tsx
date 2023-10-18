import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { Accordion, FlexContainer, Input } from "../../components";
import { Container, Label, PopularTopics } from "./styles";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

const pageSize = 10;

export const HelpCenter = (): JSX.Element => {
  const theme = useTheme();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedValue, setSearchedValue] = useState("");

  const dataFiltered = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data
      ?.filter((item) =>
        item?.title?.toUpperCase()?.includes(searchedValue?.toUpperCase())
      )
      ?.splice(0, endIndex);
  }, [searchedValue, currentPage, data]);

  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
        setIsLoading(false);
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
        iconName="search"
        iconIsLeft
      />

      <PopularTopics>Tópicos populares</PopularTopics>
      {isLoading ? (
        <FlexContainer
          minHeight={200}
          justifyContent="center"
          alignItems="center"
        >
          <ActivityIndicator size="large" color={theme.mainColor.primary} />
        </FlexContainer>
      ) : (
        <FlatList
          data={dataFiltered}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Accordion key={item?.id} title={item?.title} text={item?.body} />
          )}
          onEndReached={loadMoreItems}
          onEndReachedThreshold={0.1}
        />
      )}
    </Container>
  );
};
