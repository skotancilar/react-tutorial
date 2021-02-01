import React, { Component } from 'react';
import LanguangeContext from '../contexts/LanguageContext';

export default class LanguageSelector extends Component {
   static contextType = LanguangeContext;

   render() {
      return (
         <div>
            <div>
               Select a language
                <i className="flag us"
                  onClick={() => this.context.onLanguageChange('english')}></i>
               <i className="flag tr"
                  onClick={() => this.context.onLanguageChange('turkish')} ></i>
            </div>
         </div>
      );
   }
}
