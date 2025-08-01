import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const RubbishCounter = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);
    const [displayValue, setDisplayValue] = useState("0.0");
    
    const cleanupData = {
        total: "153.5",
        latestEvent: {
            location: "Leazes Park, Newcastle",
            date: "05-08-2025",
            attendees: 13,
            collected: "13kg",
            distance: "1.3km"
        }
    };

    const finalValue = cleanupData.total;
    
    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setAnimateIn(true);
        }, 300);
        
        return () => clearTimeout(timer);
    }, []);
    
    useEffect(() => {
        if (animateIn) {
            // Create count-up animation from 0 to the final value
            const startValue = 0;
            const endValue = parseFloat(finalValue);
            const duration = 2000; // 2 seconds
            const frameRate = 60;
            const totalFrames = (duration / 1000) * frameRate;
            const increment = endValue / totalFrames;
            
            let currentValue = startValue;
            let frame = 0;
            
            const counter = setInterval(() => {
                frame++;
                currentValue += increment;
                
                if (frame <= totalFrames) {
                    setDisplayValue(currentValue.toFixed(1));
                } else {
                    setDisplayValue(finalValue);
                    clearInterval(counter);
                }
            }, 2000 / frameRate);
            
            return () => clearInterval(counter);
        }
    }, [animateIn, finalValue]);

    return (
        <Container 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            $animateIn={animateIn}
        >
            <CounterContainer>
                <Title>Amount Cleaned (kg):</Title>
                <DigitsContainer>
                    {displayValue.split('').map((digit, index) => (
                        digit === '.' 
                            ? <DecimalPoint key={index}>.</DecimalPoint> 
                            : <Counter key={index}>{digit}</Counter>
                    ))}
                </DigitsContainer>
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
const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

// Add a separate animation for mobile
const floatAnimationMobile = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const pulseAnimation = keyframes`
  0% { box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.3); }
  50% { box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); }
  100% { box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.3); }
`;

const glowAnimation = keyframes`
  0% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
  100% { filter: brightness(1); }
`;

// Additional animation that doesn't affect transform
const shadowPulseAnimation = keyframes`
  0% { box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.3); }
  50% { box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); }
  100% { box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.3); }
`;

const Tooltip = styled.div.attrs(props => ({
    $isHovered: props.$isHovered,
}))`
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
  background: #003a65;
  color: #CBBD93;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 250px;
  z-index: 100;
  text-align: left;
  line-height: 1.6;
  opacity: ${props => props.$isHovered ? 1 : 0};
  visibility: ${props => props.$isHovered ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
  border: 2px solid #CBBD93;

  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #CBBD93 transparent;
  }

  h3 {
    margin: 0 0 0.8rem 0;
    border-bottom: 2px solid #CBBD93;
    padding-bottom: 0.5rem;
    font-size: 1.2rem;
    text-align: center;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
  }
  
  @media only screen and (max-width: 900px) {
    transform: translateX(-50%);
    width: 80%;
    max-width: 300px;
    left: 50%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  background-color: #003a65;
  box-shadow: 8px 8px 0 #CBBD93;
  transform: ${props => props.$animateIn ? 'translateY(0)' : 'translateY(20px)'};
  color: #fff;
  text-align: center;
  padding: 20px;
  z-index: 100;
  position: relative;
  border-radius: 8px;
  transition: transform 0.5s ease, opacity 0.5s ease;
  
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    padding: 15px 30px;
    transform: ${props => props.$animateIn ? 'translateY(0)' : 'translateY(20px)'};
  }
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin-right: 1rem;
  padding: 1rem;
  
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const DecimalPoint = styled.div`
  font-size: 2.7rem;
  font-weight: bold;
  padding: 0.4rem 0;
  margin: 0 0.1rem;
  color: white;
  align-self: flex-end;
  background-color: transparent;
  position: relative;
  z-index: 1;
  
  /* Add a subtle glow animation that doesn't interfere with neighbors */
  animation: ${glowAnimation} 3s ease-in-out infinite;
  animation-delay: 0.75s;
`;

const Counter = styled.div`
  font-size: 2.7rem;
  font-weight: bold;
  padding: 0.6rem 0.8rem;
  margin: 0 0.2rem;
  border-radius: 6px;
  background-color: black;
  color: white;
  box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.3);
  
  /* Idle animations with skew removed */
  animation: ${floatAnimation} 3s ease-in-out infinite,
             ${pulseAnimation} 3s ease-in-out infinite,
             ${glowAnimation} 3s ease-in-out infinite;
  /* Stagger animation timing for each digit */
  &:nth-child(odd) {
    animation-delay: 0.5s;
  }
  &:nth-child(3n) {
    animation-delay: 1s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.3);
    /* Pause animations on hover */
    animation-play-state: paused;
  }
  
  @media only screen and (max-width: 900px) {
    font-size: 2.2rem;
    padding: 0.5rem 0.6rem;
    /* Use the mobile animation instead */
    animation: ${floatAnimationMobile} 3s ease-in-out infinite,
               ${pulseAnimation} 3s ease-in-out infinite,
               ${glowAnimation} 3s ease-in-out infinite;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  @media only screen and (max-width: 900px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const DigitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 0.5rem;
`;

export default RubbishCounter;
