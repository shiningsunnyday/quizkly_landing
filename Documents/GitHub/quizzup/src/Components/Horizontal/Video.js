import React from 'react';
import '../Components.css';

const Video = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'row', flex: 7, backgroundColor: 'gray'}}>
      <div style={{flex: 1, backgroundColor: 'white'}}>

      </div>
      <div className="videoFrameDiv">
        <iframe className="videoFrame" src="https://www.youtube.com/embed/AlQD5QnjfCY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div style={{flex: 1, backgroundColor: 'white'}}>

      </div>
    </div>
  );

}

export default Video;
