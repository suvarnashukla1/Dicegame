import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  background-color: black;
  width: 300px;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;
  margin-left: 230px; /* Center button on larger screens */

  &:hover {
    background-color: grey;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

const Startgame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="imgs/whitedies.png" alt="Dice" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <StyledButton onClick={toggle}>Play Now</StyledButton>
      </div>
    </Container>
  );
};

export default Startgame;

const Container = styled.div`
  max-width: 1000px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center; /* Center the content horizontally */
  flex-direction: column; /* Stack the content vertically on smaller screens */

  .content {
    text-align: center;
    h1 {
      font-size: 96px;
    }
  }

  /* Media Query for smaller screens (720px below) */
  @media screen and (max-width: 768px) {
    .content {
      h1 {
        font-size: 48px; /* Reduce the size of the heading */
      }
    }

    /* Adjust the button layout on smaller screens */
    ${StyledButton} {
      width: 250px;
      margin-left: 0; /* Remove left margin */
      margin-top: 20px; /* Add some space between the button and title */
    }
  }

  /* Media Query for very small screens (480px below) */
  @media screen and (max-width: 480px) {
    .content {
      h1 {
        font-size: 36px; /* Further reduce the heading size */
      }
    }

    ${StyledButton} {
      width: 200px;
      padding: 8px 15px; /* Adjust padding for small screens */
      margin-top: 15px;
    }
  }
`;
