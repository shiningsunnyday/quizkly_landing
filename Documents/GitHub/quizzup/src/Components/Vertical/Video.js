import React from 'react';

const Video = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'row', flex: 7, backgroundColor: 'gray'}}>
      <div style={{flex: 1, backgroundColor: 'white'}}>

      </div>
      <div style={{flex: 4, display: 'flex', flexDirection: 'column', alignItems: 'stretch', backgroundColor: 'pink'}}>
        <iframe style={{flex: 1}} src="https://www.youtube.com/embed/AlQD5QnjfCY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div style={{flex: 1, backgroundColor: 'white'}}>

      </div>
    </div>
  );

}

export default Video;
