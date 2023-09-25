import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/shared/header/header';
import { Body } from './components/ui/body/body';
import { Home } from './components/ui/home/home';
import { ErrorPage } from './components/ui/errorPage/errorPage';
import { LinkContextProvider } from './contexts/linkContext/linkContext';
import { PasswordRecovery } from './components/ui/passwordRecovery/passwordRecovery';
import { Footer } from './components/shared/footer/footer';
import { Contact } from './components/ui/contact/contact';
import { PrivacyPolicy } from './components/ui/privacyPolicy/privacyPolicy';
import { Registration } from './components/ui/registration/registration';
import { Login } from './components/ui/logIn/login';
import { About } from './components/ui/about/about';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';
import { FilteredCategory } from './components/ui/filteredCategory/filteredCategory';
import { fetchCards } from './redux/reducers/cardsReducer';
import { useEffect } from 'react';
import { useAppDispatch } from './redux/store/store';
import { Article } from './components/reusable/article/article';
import { SearchPage } from './components/ui/searchPage/searchPage';
import { ThemeContextProvider } from './contexts/themeContext/themeContext';
import { ScrollToTop } from './utils/scrollToTop/scrollToTop';
import  './utils/browserRefresh/browserRefresh';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCards())
  }, [])

  return (
    <LinkContextProvider>
      <ThemeContextProvider>
        <Router>
          <ScrollToTop />
          <Body>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/registration' element={<Registration />} />
              <Route path='/login' element={<Login />} />
              <Route path='/passwordrecovery' element={<PasswordRecovery />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/about' element={<About />} />
              <Route path='/category/:categoryname' element={<FilteredCategory />} />
              <Route path='/article/:articlename' element={<Article />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Body>
        </Router>
      </ThemeContextProvider>
    </LinkContextProvider>
  )
}

export default App;