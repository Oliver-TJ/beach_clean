import React from "react";
import styled from "styled-components";

const RubbishCounter = () => {
    return (
        <Container>
            <Title>Amount Cleaned:</Title>
            <Counter>5</Counter><Counter>3</Counter><Point>·</Point><Counter>4</Counter><Counter>6</Counter>
            <Title>kg</Title>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  background-color: #003a65;
  box-shadow: 6px 6px 0 #CBBD93;
  transform: skewX(-15deg);
  color: #fff;
  text-align: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-right: 1rem;
  padding: 1rem;
`;

const Point = styled.div`
  font-size: 2.7rem;
  font-weight: bold;
  padding: 0.6rem;
  margin-right: 0.2em;
  border-radius: 0.2rem;
  border: #CBBD93;
  background-color: black;
  color: white;
`;

const Counter = styled.div`
  font-size: 2.7rem;
  font-weight: bold;
  padding: 0.4rem 0.2rem;
  margin-right: 0.2em;
  border-radius: 0.2rem;
  border: #CBBD93;
  background-color: black;
  color: white;
`;

export default RubbishCounter;
