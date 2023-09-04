import React from 'react';

import { useState } from 'react';

function Card({frontSide,backSide}){

  const [isFront,changeFace] = useState(true);

    function handleClick(){
        //we are doing this so that we can click back to the front side
      changeFace(oldState => !oldState);
    }
    const text = isFront ? frontSide : backSide;
    const sideClass = isFront ? "front" : "back";
    const classList = `flash-card ${sideClass}`;

  return <div className={classList} onClick={handleClick}>{text}</div>;

}
export default Card;