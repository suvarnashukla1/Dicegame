import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: 40px;

  .flex {
    display: flex;
    gap: 24px;
    margin-top: -95px;
    margin-right: 30px;
  }

  p {
    font-size: 25px;
    font-weight: 700;
    margin-right: 160px;
  }

  .error {
    color: red;
  }

  /* Media Query for screens below 768px */
  @media screen and (max-width: 768px) {
    .flex {
      gap: 16px;
      margin-top: -60px; /* Adjust for smaller screens */
    }

    p {
      font-size: 20px;
      margin-right: 120px;
    }
  }

  /* Media Query for screens below 670px */
  @media screen and (max-width: 670px) {
    .flex {
      gap: 10px; /* Reduce the gap even further */
      margin-top: -40px; /* Adjust the margin for tighter spacing */
    }

    p {
      font-size: 18px;
      margin-right: 90px;
    }
  }

  /* Media Query for screens below 570px */
  @media screen and (max-width: 570px) {
    .flex {
      gap: 8px; /* Further reduce the gap */
      margin-top: -30px; /* Tighten up the spacing further */
    }

    p {
      font-size: 16px;
      margin-right: 60px;
    }
  }

  /* Media Query for screens below 470px */
  @media screen and (max-width: 470px) {
    .flex {
      gap: 6px; /* Reduce gap even further */
      margin-top: -20px; /* Reduce margin-top for compact layout */
    }

    p {
      font-size: 14px;
      margin-right: 40px;
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  /* Media Query for screens below 768px */
  @media screen and (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  /* Media Query for screens below 670px */
  @media screen and (max-width: 670px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }

  /* Media Query for screens below 570px */
  @media screen and (max-width: 570px) {
    height: 45px;
    width: 45px;
    font-size: 16px;
  }

  /* Media Query for screens below 460px */
  @media screen and (max-width: 460px) {
    height: 40px;
    width: 40px;
    font-size: 14px;
  }

  /* Media Query for screens below 470px */
  @media screen and (max-width: 470px) {
    height: 35px;
    width: 35px;
    font-size: 12px;
  }
  @media screen and (max-width: 390px) {
    height: 35px;
    width: 35px;
    font-size: 12px;
    margin-top:50px;
  }
`;
