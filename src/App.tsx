import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LinkContextProvider } from './contexts/linkContext/linkContext';
import { fetchCards } from './redux/reducers/cardsReducer';
import { useAppDispatch, useAppSelector } from './redux/store/store';
import { ThemeContextProvider } from './contexts/themeContext/themeContext';
import { ScrollToTop } from './utils/scrollToTop/scrollToTop';
import { About, Article, Body, Contact, ErrorPage, FilteredCategory, Footer, Header, Home, Login, PasswordRecovery, PrivacyPolicy, Registration, SearchPage } from './components';
import './utils/browserRefresh/browserRefresh';
import './assets/styles/fonts.css';
import './assets/styles/reset.css';
import { ToastContainer } from 'react-toastify';
import { AuthorizedContextProvider } from './contexts/authorizedContext/authorizedContext';
import { getUserByToken } from './redux/reducers/usersReducer/usersReducer';
import { Bookmarks } from './components/ui/bookmarks/bookmarks';
import { UserSettings } from './components/ui/userSettings/userSettings';
import { CheckAuthorization, CheckNotAuthorized } from './contexts/authorizedContext/isAuthorized';
import { WeatherPage } from './components/ui/weatherPage/weatherPage';

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
                <Route path='/passwordrecovery' element={<PasswordRecovery />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route path='/about' element={<About />} />
                <Route path='/category/:categoryname' element={<FilteredCategory />} />
                <Route path='/article/:articlename' element={<Article />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/weather' element={<WeatherPage />} />
                <Route path='/registration' element={
                  <CheckAuthorization>
                    <Registration />
                  </CheckAuthorization>} />
                <Route path='/login' element={
                  <CheckAuthorization>
                    <Login />
                  </CheckAuthorization>} />
                <Route path='/bookmarks' element={
                  <CheckNotAuthorized>
                    <Bookmarks />
                  </CheckNotAuthorized>} />
                <Route path='/settings' element={
                  <CheckNotAuthorized>
                    <UserSettings />
                  </CheckNotAuthorized>} />
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