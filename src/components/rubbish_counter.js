import React, { useState } from "react";
import styled from "styled-components";

const RubbishCounter = () => {
    const [isHovered, setIsHovered] = useState(false);

    const cleanupData = {
        total: "140.50",
        latestEvent: {
            location: "Cullercoats to King Edwards Bay",
            date: "02-22-2025",
            attendees: 24,
            collected: "57.5kg",
            distance: "2.25km"
        }
    };

    return (
        <Container
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CounterContainer>
                <Title>Amount Cleaned (kg):</Title>
                <Counter>1</Counter>
                <Counter>4</Counter>
                <Counter>0</Counter>
            </CounterContainer>


            <Tooltip $isHovered={isHovered}>
                <h3>Latest Cleanup</h3>
                <p>📍 {cleanupData.latestEvent.location}</p>
                <p>📅 {new Date(cleanupData.latestEvent.date).toLocaleDateString()}</p>
                <p>👥 {cleanupData.latestEvent.attendees} volunteers</p>
                <p>🗑️ {cleanupData.latestEvent.collected} collected</p>
                <p>📏 {cleanupData.latestEvent.distance} cleaned</p>
            </Tooltip>
        </Container>
    );
};


// Styled components
const Tooltip = styled.div.attrs(props => ({
    $isHovered: props.$isHovered,
}))`
  position: absolute;
  top: 100%;
  left: 60%;
  transform: translateX(-50%) skewX(15deg);
  margin-top: 10px;
  background: #003a65;
  color: #CBBD93;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 220px;
  z-index: 100;
  text-align: left;
  line-height: 1.6;
  opacity: ${props => props.$isHovered ? 1 : 0};
  visibility: ${props => props.$isHovered ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  pointer-events: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #003a65 transparent;
    transition: inherit;
    opacity: ${props => props.$isHovered ? 1 : 0};
  }

  h3 {
    margin: 0 0 0.5rem 0;
    border-bottom: 1px solid #CBBD93;
    padding-bottom: 0.5rem;
    transition: inherit;
  }

  p {
    margin: 0.4rem 0;
    transition: inherit;
  }
  
  @media only screen and (max-width: 900px) {
    transform: skewX(0deg);
    left: 20%;
  }
`;

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
  z-index: 100;
  
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    padding-right: 30px;
    transform: skewX(0deg);
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-right: 1rem;
  padding: 1rem;

  @media only screen and (max-width: 900px) {
    font-size: 1rem;
  }
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

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export default RubbishCounter;
