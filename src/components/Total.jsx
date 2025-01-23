import styled from "styled-components";

const Total = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total score</p>
    </ScoreContainer>
  );
};

export default Total;

const ScoreContainer = styled.div`
  h1 {
    font-size: 80px;
    line-height: 100px;
    margin-left: 60px;
    margin-top: 25px;
  }
  
  p {
    font-size: 24px;
    font-weight: 500;
    margin-left: 30px;
  }

  /* Media Query for screens below 768px */
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
      line-height: 70px;
      margin-left: 40px;
    }

    p {
      font-size: 20px;
      margin-left: 20px;
    }
  }

  /* Media Query for screens below 460px */
  @media screen and (max-width: 460px) {
    h1 {
      font-size: 40px;
      line-height: 60px;
      margin-left: 20px;
    }

    p {
      font-size: 16px;
      margin-left: 10px;
    }
    @media screen and (max-width: 390px) {
    h1 {
      font-size: 40px;
      line-height: 60px;
      margin-left: 20px;
    }

    p {
      font-size: 14px;
      margin-left: 10px;
    }}
  }
`;
