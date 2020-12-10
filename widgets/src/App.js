import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search'

const items = [
   {
      title: "What is React",
      content: "React is a front-end javascript framework."
   },
   {
      title: "Why use React?",
      content: "React is favorites JS library among engineers"
   },
   {
      title: "How do you use React?",
      content: 'You use React by creating components'
   }]

class App extends React.Component {
   render() {
      return (
         <div>
            <Search />
         </div>
      )
   }
}

export default App;