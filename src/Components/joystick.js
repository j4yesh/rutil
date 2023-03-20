import React, { useState } from 'react';

function Joystick() {
  const [buttonPos, setButtonPos] = useState({x: 0, y: 0});
  const [isDragging, setIsDragging] = useState(false);
  
  const handleMouseDown = (event) => {
    setIsDragging(true);
  }
  
  const handleMouseUp = (event) => {
    setIsDragging(false);
    setButtonPos({x: 0, y: 0});
  }
  
  const handleMouseMove = (event) => {
    if (isDragging) {
      const joystick = event.currentTarget.getBoundingClientRect();
      const newX = event.clientX - joystick.left - joystick.width/2;
      const newY = event.clientY - joystick.top - joystick.height/2;
      console.log(newX+" "+newY);
      let ra = newX*newX+newY*newY;
      ra = Math.sqrt(ra);
      console.log(ra);
      if(ra>50){
        setButtonPos(newX-1,newY-1);
      }else{
        setButtonPos({x: newX, y: newY});
      }
    }
  }
  
  return (
      <div style={{position: 'relative', width: '100px', height: '100px', borderRadius: '50%',backgroundColor: '#313743'
                ,margin: '5px'}}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onMouseLeave={handleMouseUp}>

      <div style={{position: 'absolute', top: '50%', left: '50%', 
       transform: `translate(-50%, -50%) translate(${buttonPos.x}px, ${buttonPos.y}px)`,
       width: '50px', height: '50px', 
       backgroundColor: '#e1e1e1', 
       borderRadius: '50%',
       borderRadius: '50%',
       border: '8px solid white'
      }}
           onMouseDown={handleMouseDown} />
    </div>
  );
}

export default Joystick;
