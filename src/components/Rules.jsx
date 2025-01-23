import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <div>
      <Rulescontainer>
        <h2>How to Play</h2>
        <div className="text">
            <p>Select any Number</p>
            <p>Click on dice image</p>
            <p>After clicking if dice number is same to selected you get points equal to it</p>
        </div>
      </Rulescontainer>
    </div>
  )
};

export default Rules;
const Rulescontainer =styled.div`
background-color:#ffdaf9;
padding:20px;
margin:0 auto;
max-width:800px;
margin-top:20px;
border-radius:5px;
h2{
    font-size:20px;
}
.text{
    margin-top:14px;
}
`;

