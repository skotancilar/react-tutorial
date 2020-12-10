import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate'

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
   }];

const options = [
   {
      label: 'The Color Red',
      value: 'red'
   },
   {
      label: 'The Color Green',
      value: 'breen'
   },
   {
      label: 'The Color Blue',
      value: 'blue'
   }];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
   return (
      <div style={{ margin: '20px' }}>
         <Translate />
      </div >
   );
};