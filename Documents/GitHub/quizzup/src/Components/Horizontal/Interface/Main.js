import React from 'react';
import './Interface.css';

const Main = () => {

  return (
    <div style={styles.scrollStyle}>

    </div>
  );

}

const styles = {
  scrollStyle: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    height: '100%',
    top: '0%',
    backgroundColor: 'yellow',
    overflowY: 'scroll',
  },
}

export default Main;
