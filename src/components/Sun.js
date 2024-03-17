import React from 'react';
import styled from "@emotion/styled";

// Styled component for the half-circle
const Sun = styled.div`
  width: 200px; /* Adjust width as needed */
  height: 200px; /* Adjust height as needed */
  border-radius: 100% 100% 100% 100%; /* Half circle shape */
  background: linear-gradient(135deg, #ffdb58, #ffd700); /* Gradient colors */
  position: relative;
  overflow: hidden;
  align-self: flex-end; /* Aligns the sun to the bottom of the flex container */
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%); /* Clip the upper half of the sun */
  margin: 0px;
  padding: 0px;
  top: 100px;


  &::before {
    content: '';
    position: absolute;
    width: 400px; /* Width of the background gradient */
    height: 400px; /* Height of the background gradient */
    background: radial-gradient(circle, #ffd700 0%, rgba(255, 215, 0, 0) 70%); /* Additional radial gradient */
    top: -150px; /* Adjust position of the radial gradient */
    left: -100px; /* Adjust position of the radial gradient */
    border-radius: 50%;
  }
`;

// Flex container component
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column; /* Ensures children stack vertically */
  height: 100vh; /* Adjust to fit the viewport height */
`;

// React component
const MorningSun = () => {
  return (
      <Sun />
  );
};

export default MorningSun;
