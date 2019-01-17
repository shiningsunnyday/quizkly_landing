import React from 'react';

const Visual = () => {

  return (
    <div style={{display: 'flex', flexDirection: 'row', flex: 15, backgroundColor: 'green'}}>
      <div className="container" style={{flex: 6}}>
        <img style={{position: "absolute", left: '5%', right: '5%', width: '90%', top: '10%', height: '80%', backgroundColor: 'white'}} src={require('../../Containers/imgs/documents_icon.jpg')} alt="..." />
        <div className="overlay">
          <div className="text" style={{fontSize: '1.5vw', whiteSpace: 'nowrap'}}>Any corpus of learning material</div>
        </div>
      </div>
      <div className="container">
        <img style={{position: "absolute", left: '10%', right: '5%', top: '45%', width: '85%', height: '10%', backgroundColor: 'white'}} src={require('../../Containers/imgs/arrow.png')} alt="..." />
        <div className="overlay">
          <div className="text" style={{whiteSpace: 'nowrap'}}>Quizkly, like a boss</div>
        </div>
      </div>
      <div className="container" style={{flex: 6}}>
        <img style={{position: "absolute", left: '0%', right: '0%', top: '10%', width: '90%', height: '80%', backgroundColor: 'white'}} src={require('../../Containers/imgs/flashcards_color.png')} alt="..." />
        <div className="overlay">
          <div className="text" style={{fontSize: '1.5vw', whiteSpace: 'nowrap'}}>Quizlet-like multiple choice questions</div>
        </div>
      </div>
    </div>
  );

}

export default Visual;
//
// <div style={{display: 'flex', flex: 7, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
//   <img style={{width: '80%', height: '10%', backgroundColor: 'white'}} src={require('../../Containers/imgs/arrow.png')} alt="..." />
// </div>


// <div style={{display: 'flex', flex: 6, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
//   <img style={{width: '100%', height: '80%', backgroundColor: 'gray'}} src={require('../../Containers/imgs/documents_icon.jpg')} alt="..." />
//
// </div>
