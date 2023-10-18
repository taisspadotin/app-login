import { TouchableOpacity } from "react-native";
import { Body, Content, Title } from "./styles";
import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FlexContainer } from "../FlexContainer";
import { useTheme } from "styled-components/native";

interface IAccordion {
  title: string;
  text: string;
}

export const Accordion = ({ title, text }: IAccordion): JSX.Element => {
  const theme = useTheme();
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Content>
      <TouchableOpacity
        testID="accordion-text"
        onPress={() => setIsExpand(!isExpand)}
      >
        <FlexContainer flexDirection="row" alignItems="center">
          <FlexContainer width="90%">
            <Title isActive={isExpand}>{title}</Title>
          </FlexContainer>
          <FlexContainer width="10%" alignItems="center">
            <AntDesign
              name={isExpand ? "minus" : "plus"}
              size={15}
              color={
                isExpand ? theme.mainColor.primary : theme.fontsColor.primary
              }
            />
          </FlexContainer>
        </FlexContainer>
      </TouchableOpacity>
      {isExpand && <Body testID="accordion-body">{text}</Body>}
    </Content>
  );
};
