import './App.css';
import React from 'react';
import Counter from './Counter';


const App = () => {
  const [mount, setMount] = React.useState(true);
  const [color, setColor] = React.useState('black');

  const mountCounter = () => {
    setMount(true);
  }

  const unmountCounter = () => {
    setMount(false);
  }

  React.useEffect(() => {
    // componentDidUpdate
    console.log('ComponentDidUpdate?');
    const changeColorOnClick = () => {
      if (color === 'black') {
        setColor('red');
      } else {
        setColor('black');
      }
    }

    // componentDidMount
    console.log('ComponentDidMount?');
    document.addEventListener('click', changeColorOnClick);

    // ComponentWillUnmount
    return () => {
      console.log('Component will unmount');
      document.removeEventListener('click', changeColorOnClick);
    }
  }, [color]);

  return (
    <div className="App">
      <div 
        id="myDiv"
        style={{ 
          color: 'white',
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: '50%',
          right: '50%',
          backgroundColor: color,
        }}
      >
        This div can change colors. Click on me!
      </div>
      <button onClick={mountCounter} disabled={mount}>Mount Counter</button>
      <button onClick={unmountCounter} disabled={!mount}>unmountCounter Counter</button>
      {mount ? <Counter /> : null}
    </div>
  );
}

export default App;
