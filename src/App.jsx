import Counter from './components/Counter';
import TodoList from './components/TodoList';
import ProfileCard from './components/ProfileCard';
import SearchBox from './components/SearchBox';
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Week 9: React Hooks</h1>
        <p>Mastering State, Effects, and Refs</p>
      </header>
      
      <main className="components-grid">
        <Counter />
        <TodoList />
        <ProfileCard />
        <SearchBox />
      </main>
    </div>
  );
}

export default App;