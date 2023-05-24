import React from "react";
import Typewriter from 'typewriter-effect';

function Pre({ load }) {

  return (
    <div className={load ? "preloader" : "preloader-hide"}>
      <div>
        <h1 className='headtext'>Bouxin Cyril</h1>
        <h2 className='nametext'>
          <Typewriter
          options={
            {
              wrapperClassName: 'headname'
            }
          }
            onInit={(typewriter) => {
              typewriter.
             
              pauseFor(2000)
              .typeString('Développeur web junior')
              .start();
            }}
          />
        </h2>
      </div>

    </div>
  )
}

export default Pre;