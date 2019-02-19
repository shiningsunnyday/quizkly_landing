import React from 'react';
import '../Components.css';

const Video = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'row', flex: 7, backgroundColor: 'transparent'}}>
      <div style={{flex: 1, backgroundColor: 'transparent'}}>
      </div>
      <div className="videoFrameDiv">
        <iframe style={{position: 'relative'}} className="videoFrame" src="https://www.youtube.com/embed/uAlFbX4SiIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
      <div style={{flex: 1, backgroundColor: 'transparent'}}>
      </div>
    </div>
  );

}

export default Video;
