import { styled } from "styled-components";

type Props = {
  title: string;
  className: string;
};

const StyledGameDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
`;

const Title = styled.p`
  font-size: 14px;
  margin: 8px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px;
  padding: 6px 12px;
  border: 0px;
  transition: all 450ms ease-in-out;
  border-radius: 4px;
  font-size: 12px;
  &:hover {
    border: 0px;
    background-color: #8dc63f;
    color: #ffffff;
  }
`;

const GameDescription = ({ title, className }: Props) => {
  return (
    <StyledGameDescription className={className}>
      <Title>{title}</Title>
      <StyledButton>PLAY</StyledButton>
    </StyledGameDescription>
  );
};

export default GameDescription;
