import { TouchableOpacity } from "react-native";
import { Body, Content, Title } from "./styles";
import { useState } from "react";

interface IAccordion {
  title: string;
  text: string;
}

export const Accordion = ({ title, text }: IAccordion): JSX.Element => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <Content>
      <TouchableOpacity onPress={() => setIsExpand(!isExpand)}>
        <Title isActive={isExpand}>{title}</Title>
      </TouchableOpacity>
      {isExpand && <Body>{text}</Body>}
    </Content>
  );
};
