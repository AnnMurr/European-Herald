import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LinkContextProvider } from './contexts/linkContext/linkContext';
import { fetchCards } from './redux/reducers/cardsReducer';
import { useAppDispatch } from './redux/store/store';
import { ThemeContextProvider } from './contexts/themeContext/themeContext';
import { ScrollToTop } from './utils/scrollToTop/scrollToTop';
import { About, Article, Body, Contact, ErrorPage, FilteredCategory, Footer, Header, Home, Login, PasswordRecovery, PrivacyPolicy, Registration, SearchPage } from './components';
import './utils/browserRefresh/browserRefresh';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';
import { ToastContainer } from 'react-toastify';
import { AuthorizedContextProvider } from './contexts/authorizedContext/authorizedContext';
import { getUserByToken } from './redux/reducers/usersReducer/usersReducer';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCards())
    dispatch(getUserByToken())
  }, [])

  return (
    <AuthorizedContextProvider>
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
              <ToastContainer />
            </Body>
          </Router>
        </ThemeContextProvider>
      </LinkContextProvider>
    </AuthorizedContextProvider>
  )
}

export default App;