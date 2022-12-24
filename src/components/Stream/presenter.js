import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CLIENT_ID } from '../../constants/auth';

class Stream extends Component {
  componentDidUpdate() {
    if (!this.audio) {
      return;
    }

    const { activeTrack } = this.props;

    if (activeTrack) {
      this.audio.play();
    } else {
      this.audio.pause();
    }
  }

  render() {
    const {
      user, tracks = [], activeTrack, onAuth, onPlay
    } = this.props;

    return (
      <div>
        <div>
          {
            user
              ? <div>{user.username}</div>
              : <button onClick={onAuth} type="button">Login</button>
          }
        </div>
        <br />
        <div>
          {
            tracks.map((track, index) => (
              <div className="track" key={track.origin.id || index}>
                {track.origin.title}
                <button type="button" onClick={() => onPlay(track)}>Play</button>
              </div>
            ))
          }
        </div>
        {
          activeTrack
            ? (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <audio
                id="audio"
                ref={(node) => { this.audio = node; }}
                src={`${activeTrack.origin.stream_url}?client_id=${CLIENT_ID}`}
              />
            )
            : null
        }
      </div>
    );
  }
}

Stream.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string
  }),
  tracks: PropTypes.arrayOf(PropTypes.shape({
    origin: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })
  })),
  activeTrack: PropTypes.shape({
    origin: PropTypes.shape({
      stream_url: PropTypes.string
    })
  }),
  onAuth: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired
};

Stream.defaultProps = {
  user: null,
  tracks: [],
  activeTrack: null
};

export default Stream;
