import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/shared/header/header';
import { Login } from './components/shared/logIn/login';
import { Registration } from './components/shared/registration/registration';
import { Body } from './components/ui/body/body';
import { Home } from './components/ui/home/home';
import { ErrorPage } from './components/ui/errorPage/errorPage';
import { LinkContextProvider } from './contexts/linkContext/linkContext';
import { PasswordRecovery } from './components/ui/passwordRecovery/passwordRecovery';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';


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
            <Route path='/passwordrecovery' element={<PasswordRecovery />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Body>
      </Router>
    </LinkContextProvider>
  );
}

export default App;
