import { useState, FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const keyDown = (e) => {
    if (e.key === 'Enter') {
      setResult((oldArray) => [...oldArray, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h1>{name}!</h1>
      <div>
        <input
          type="text"
          placeholder="Fill & Press Enter button"
          onChange={(e) => handleChange(e)}
          value={input}
          onKeyDown={keyDown}
        />
        {/* <span>Press enter</span>* */}
      </div>
      <ul>
        {result.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};
