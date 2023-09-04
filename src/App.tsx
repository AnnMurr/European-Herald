import './App.css';
import { Header } from './components/shared/header/header';
import { Login } from './components/shared/logIn/login';
import './styles/reset.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Login/>
    </div>
  );
}

export default App;
