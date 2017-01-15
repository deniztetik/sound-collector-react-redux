import React from 'react';

const Player = ({currentSound}) => {
  return <iframe auto_play="true" controls src={currentSound} frameborder="0"></iframe>
}

export default Player