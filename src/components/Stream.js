import React from 'react';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map(track => <div className="track">{track.title}</div>)
      }
    </div>
  );
}

export default Stream;
