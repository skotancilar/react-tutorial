import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail'

const App = () => {
   return (
      <div style={{ margin: '20px' }} className="ui container grid">
         <div className="ui row">
            <div className="ui column eight wide"><SongList />
            </div>
            <div className="ui column eight wide"><SongDetail />
            </div>
         </div>
      </div>
   );
};

export default App;