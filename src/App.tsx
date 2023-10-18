import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./utils/browserRefresh/browserRefresh";

import { AuthorizedContextProvider } from "./contexts/authorizedContext/authorizedContext";
import { CheckAuthorization, CheckNotAuthorized } from "./contexts/authorizedContext/isAuthorized";
import { LinkContextProvider } from "./contexts/linkContext/linkContext";
import { ThemeContextProvider } from "./contexts/themeContext/themeContext";
import { WeatherContextProvider } from "./contexts/weatherContext/weatherContext";
import { fetchCards, fetchCategoryNewsBlocks } from "./redux/reducers/cardsReducer/cardsReducer";
import { getUserByToken } from "./redux/reducers/usersReducer/usersReducer";
import { getWetherData } from "./redux/reducers/weatherReducer/weatherReducer";
import { useAppDispatch } from "./redux/store/store";
import { ScrollToTop } from "./utils/scrollToTop/scrollToTop";
import {
  About,
  Article,
  Body,
  Bookmarks,
  Contact,
  ErrorPage,
  FilteredCategory,
  Footer,
  Header,
  Home,
  Login,
  PrivacyPolicy,
  Registration,
  SearchPage,
  UserSettings,
  WeatherPage
} from "./components";

import "./assets/styles/fonts.css";
import "./assets/styles/reset.css";

function App() {
  const dispatch = useAppDispatch()
  const categories = ["Business", "Arts", "Health", "Sports"]

  useEffect(() => {
    dispatch(fetchCards())
    dispatch(getUserByToken())
    dispatch(getWetherData())
    categories.forEach((category) => dispatch(fetchCategoryNewsBlocks(category)))
  }, [])

  return (
    <AuthorizedContextProvider>
      <LinkContextProvider>
        <ThemeContextProvider>
          <WeatherContextProvider>
            <Router>
              <ScrollToTop />
              <Body>
                <Header />
                <Routes>
                  <Route path="/European-Herald/dist/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/about" element={<About />} />
                  <Route
                    path="/category/:categoryname"
                    element={<FilteredCategory />}
                  />
                  <Route path="/article/:articlename" element={<Article />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/weather" element={<WeatherPage />} />
                  <Route
                    path="/registration"
                    element={
                      <CheckAuthorization>
                        <Registration />
                      </CheckAuthorization>
                    }
                  />
                  <Route
                    path="/login"
                    element={
                      <CheckAuthorization>
                        <Login />
                      </CheckAuthorization>
                    }
                  />
                  <Route
                    path="/bookmarks"
                    element={
                      <CheckNotAuthorized>
                        <Bookmarks />
                      </CheckNotAuthorized>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <CheckNotAuthorized>
                        <UserSettings />
                      </CheckNotAuthorized>
                    }
                  />
                  <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
                <ToastContainer />
              </Body>
            </Router>
          </WeatherContextProvider>
        </ThemeContextProvider>
      </LinkContextProvider>
    </AuthorizedContextProvider>
  );
}

export default App;
