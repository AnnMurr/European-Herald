import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/shared/header/header';
import { Body } from './components/ui/body/body';
import { Home } from './components/ui/home/home';
import { ErrorPage } from './components/ui/errorPage/errorPage';
import { LinkContextProvider } from './contexts/linkContext/linkContext';
import { PasswordRecovery } from './components/ui/passwordRecovery/passwordRecovery';
import { Footer } from './components/shared/footer/footer';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';
import { Contact } from './components/ui/contact/contact';
import { PrivacyPolicy } from './components/ui/privacyPolicy/privacyPolicy';
import { Registration } from './components/ui/registration/registration';
import { Login } from './components/ui/logIn/login';

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
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
          <Footer />
        </Body>
      </Router>
    </LinkContextProvider>
  );
}

export default App;
