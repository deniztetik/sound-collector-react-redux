import React from 'react';

const Player = ({currentSound}) => {
  console.log(currentSound);
  return <iframe auto_play="true" controls src={currentSound + '?auto_play=true'} frameborder="0"></iframe>
}

export default Player
