import React, { useState } from 'react';
import './App.css';
import '@chatui/core/dist/index.css';
import { Layout, Menu, MenuProps } from 'antd';
import ChatArea from './ChatArea';
import Quiz from './Quiz';
import WelcomePage from './WelcomePage';
import Info from './Info';

const App = () => {
  const [current, setCurrent] = useState<string>('accueil'); // Specify string type for 'current'

  const handleMenuClick = (key: string) => { // Specify string type for 'key'
    setCurrent(key);
  };

  return (
    <div className="App">
    <div className="banner">
    </div>
    <div className="menu">
  <ul>
    <li>
      <button
        onClick={() => handleMenuClick('accueil')}
        className={current === 'accueil' ? 'active' : ''}
      >
        Accueil
      </button>
    </li>
    <li>
      <button
        onClick={() => handleMenuClick('quiz')}
        className={current === 'quiz' ? 'active' : ''}
      >
        Quiz
      </button>
    </li>
    <li>
      <button
        onClick={() => handleMenuClick('chat')}
        className={current === 'chat' ? 'active' : ''}
      >
        Chat
      </button>
    </li>
    <li>
      <button
        onClick={() => handleMenuClick('info')}
        className={current === 'info' ? 'active' : ''}
      >
        Infos
      </button>
    </li>
  </ul>
</div>
      {current === 'chat' && <ChatArea setCurrent={setCurrent} />}
      {current === 'quiz' && <Quiz />}
      {current === 'accueil' && <WelcomePage />}
      {current === 'info' && <Info />}
    </div>
  );
};


export default App;
