import React from 'react';
import Loader from './Loader';

const loaderContainer = {
  minHeight: '100vh',
  minWidth: '100vw',
  overflow: 'hidden',
  background: '#282c34',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading(props) {
  if (props.error) {
    return <div className="loader-container" style={loaderContainer}>Error! Please refresh the page</div>;
  } else if (props.pastDelay) {
    return <div className="loader-container" style={loaderContainer}> <Loader /> </div>;
  } else {
    return null; // Avoiding Flash Of Loading Component (<200ms)
  }
}

export default Loading;