import React from 'react';

const Visual = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'row', flex: 15, backgroundColor: 'green'}}>
      <div style={{display: 'flex', flex: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <img style={{width: '100%', height: '80%', backgroundColor: 'gray'}} src={require('../../Containers/imgs/documents_icon.jpg')} alt="..." />
      </div>
      <div style={{display: 'flex', flex: 7, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <img style={{width: '80%', height: '10%', backgroundColor: 'white'}} src={require('../../Containers/imgs/arrow.png')} alt="..." />
      </div>
      <div style={{display: 'flex', flex: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
        <img style={{width: '100%', height: '100%', backgroundColor: 'white'}} src={require('../../Containers/imgs/flashcard_icon.png')} alt="..." />
      </div>
    </div>
  );

}

export default Visual;
