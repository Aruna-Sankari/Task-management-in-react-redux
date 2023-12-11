// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Routing from './Routing.js';
import { cart } from './Component/Store.js';

function App() {
  return (
    <div>
      <Provider store={cart}>
          <Routing />
      </Provider>

    </div>
  );
}


export default App;
