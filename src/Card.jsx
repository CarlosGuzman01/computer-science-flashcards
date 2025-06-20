import Flippy, { FrontSide, BackSide } from 'react-flippy';
import React, { useRef } from 'react';


function Card(props){
    const ref = useRef();
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="vertical"
            ref={ref}
            style={{ width: '800px', height: '450px' }}
          >
            <FrontSide style={{ backgroundColor: '#41669d', color: 'white' }}>
             {props.question} <br />
              
            </FrontSide>
            <BackSide style={{ backgroundColor: '#175852', color: 'white' }}>
              {props.answer}
              {props.image && (
            <img
              src={props.image}
              alt="flashcard visual"
              style={{ width: '100%', height: '350px', objectFit: 'cover', marginTop: '10px' }}
            />
          )}
            </BackSide>
          </Flippy>
        </div>
      );
}


export default Card;