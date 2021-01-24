import React, { useState } from 'react'
import SearchBar from './SearchBar';
import Changer from './Changer';

const HeadLine = (props) => {
   const [title, setTitle] = useState('Search For Videos')

   const changeTitle = (title) => {
      setTitle(title)
   }

   return (
      <div className="ui grid">
         <div className="ui row">
            <div className="eleven wide column">
               <SearchBar {...props} title={title} placeholder="Search..." />
            </div>
            <div className="five wide column" style={{ margin: 'auto' }}>
               <Changer changeTitle={changeTitle} />
            </div>
         </div>
      </div>
   )
}

export default HeadLine;