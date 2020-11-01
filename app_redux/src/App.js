import logo from './logo.svg';
import './App.css';
import TodoList from './render/TodoList'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m4 l2"></div>
        <div className="col  s12 m4 l8">
          <TodoList />
        </div>
        <div className="col  s12 m4 l2"></div>
      </div>
    </div>
  );
}

export default App;
