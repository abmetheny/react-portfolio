import React from "react";
import { Card } from 'antd';

const gridStyle = {
  width: '30%',
  minWidth: '250px',
  textAlign: 'center',
  margin: '10px 0',
  background: '#ffb3c2',
};

//Populates the skill cards displayed on the Resume page
function Proficiencies(props) {
  return (
    <Card.Grid hoverable={false} style={gridStyle}>
        <span style={{fontSize: '40px'}}>{props.img}</span>
        <h3 style={{margin: '0'}}>{props.name}</h3>
        <p style={{margin: '0'}}>{props.desc}</p>
    </Card.Grid>
  );
}

export default Proficiencies;