import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/shared/header/header';
import { Login } from './components/shared/logIn/login';
import { Registration } from './components/shared/registration/registration';
import { Body } from './components/ui/body/body';
import { Home } from './components/ui/home/home';
import './styles/reset.css';
import { ErrorPage } from './components/ui/errorPage/errorPage';
import { LinkContextProvider } from './contexts/linkContext/linkContext';

function App() {
  return (
    <LinkContextProvider>
      <Router>
        <Body>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Body>
      </Router>
    </LinkContextProvider>
  );
}

export default App;
