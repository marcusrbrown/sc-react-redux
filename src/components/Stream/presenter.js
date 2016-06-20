import React, { PropTypes } from 'react';

function Stream({ user, tracks = [], onAuth }) {
  return (
    <div>
      <div>
        {
          user ?
            <div>{user.username}</div> :
            <button onClick={onAuth} type="button">Login</button>
        }
      </div>
      <br />
      <div>
        {
          tracks.map((track, key) =>
            <div className="track" key={key}>{track.origin.title}</div>
          )
        }
      </div>
    </div>
  );
}

Stream.propTypes = {
  user: PropTypes.object,
  tracks: PropTypes.array,
  onAuth: PropTypes.func.isRequired
};

export default Stream;
