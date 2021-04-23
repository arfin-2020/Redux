import logo from './logo.svg';
import './App.css';
import ReducerCount from './components/ReducerCount/ReducerCount';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <ReducerCount/>
      <Cart/>
      <Shop/>
    </div>
  );
}

export default App;
