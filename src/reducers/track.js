import * as actionTypes from '../constants/actionTypes';

const initialState = {
  tracks: [],
  activeTrack: null
};

function setTracks(state, action) {
  const { tracks } = action;
  return { ...state, tracks };
}

function setPlay(state, action) {
  const { track } = action;
  return { ...state, activeTrack: track };
}

export default function (state = initialState, action = { type: '' }) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);

    case actionTypes.TRACK_PLAY:
      return setPlay(state, action);

    default:
      return state;
  }
}
