import React from 'react';
import { useDispatch } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'TEST_LOG' });
  };
  return (
    <div className="app">
      App page
      <br />
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default App;
