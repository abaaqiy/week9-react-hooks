import { useState, useEffect, useRef } from 'react';

function SearchBox() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [searchText, setSearchText] = useState('');

  renderCount.current += 1;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="card">
      <h2>Component 4: Search Box</h2>
      
      <input
        ref={inputRef}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Start typing..."
      />
      
      <p>You typed: <strong>{searchText}</strong></p>
      
      <div className="render-stats">
        Component Render Count: <strong>{renderCount.current}</strong>
      </div>
    </div>
  );
}

export default SearchBox;