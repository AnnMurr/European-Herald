import './App.css';
import { Header } from './components/shared/header/header';
import { Registration } from './components/shared/registration/registration';
import './styles/reset.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Registration />
    </div>
  );
}

export default App;
