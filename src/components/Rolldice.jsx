import styled from "styled-components";
import { useState } from "react";

const Rolldice = ({rolldice,currentDice}) => {


  return (
    <Main>
      <div>
        <ImageContainer className="dice" onClick={rolldice}>
          <img src={`/imgs/d${currentDice}.jpg`} alt="Dice" width="500" />
          <p>Click to roll</p>
        </ImageContainer>
      </div>
    </Main>
  );
};

export default Rolldice;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const ImageContainer = styled.div`
  img {
    width: 200px;
    height: auto;
    cursor: pointer;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    margin-left: 30px;
  }
`;
