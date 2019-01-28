import React from 'react';
import './Interface.css';

const Document = (props) => {
  return (
    <div style={styles.documentStyle}>
      <textarea style={styles.textAreaStyle} index={props.index} value={props.text} onChange={props.textEdited}/>
    </div>
  );
}

const styles = {
  documentStyle: {
    position: 'relative',
    height: '150%',
  },
  textAreaStyle: {
    position: 'relative',
    height: '100%',
  },
}

export default Document;
