import React, { useState, useEffect } from 'react';
import { Venn } from '@ant-design/plots';
import { Paper } from '@mui/material';

export const MatchingCircles = ({name, match}) => {
    const [currentMatch, setCurrentMatch] = useState(0);

    const Animate = () =>{
        if(currentMatch < match){
            setTimeout(()=>{
                setCurrentMatch(currentMatch+1);
            }, 20);}
    }


    useEffect(()=>{ Animate();}, [currentMatch])

  const config = {
    data: [
      {
        sets: ['You'],
        size: 300,
        label: 'Your Values',
        title: "aa", tooltip:"aaa"
    },
      {
        sets: [name],
        size: 300,
        label: name+"'s Values",
      },
      {
        sets: ['You', name],
        size: currentMatch*3,
        label: 'Matching Values',
      }
    ],
    setsField: 'sets',
    sizeField: 'size',
    pointStyle: {
      fillOpacity: 0.85,
        },
        tooltip: {
          fields: ['label', 'size'],
          formatter: (datum) => {
            return {
              name: datum.label,
              value: datum.size/3 + '%'
            };
          },
        },
  };

  return (
    <Paper style={{ padding: "10px"}}>
    <Venn {...config} />
    </Paper>  );
};

//ReactDOM.render(<DemoVenn />, document.getElementById('container'));




//render(<App />, document.getElementById('root'))