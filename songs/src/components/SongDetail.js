import React from 'react'
import { connect } from 'react-redux'

export const SongDetail = ({ song }) => {
   if (!song) {
      <div>Select a song</div>
   }

   return (
      <div>
         <h3>Details For:</h3>
         <p>Title: {song.title}
            <br />
               Duration: {song.duration}
         </p>
      </div>
   );
};

const mapStateToProps = (state) => {
   return { song: state.selectedSong };
}

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(SongDetail);
