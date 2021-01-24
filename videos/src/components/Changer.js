import React from 'react'

const Changer = (props) => {
   const changeTitle = () => {
      props.changeTitle('I AM CHANGED');
   }

   return (
      <div>
         <button onClick={changeTitle} className="massive ui button">
            Click Me
         </button>
      </div>
   )
}

export default Changer;
