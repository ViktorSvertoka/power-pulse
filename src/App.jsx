import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import FirstPage from './pages/FirstPage/FirstPage';
// import SecondPage from './pages/SecondPage/SecondPage';
// import HalfPage from './pages/HalfPage/HalfPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignUpBodyPage from './pages/SignUpBodyPage/SignUpBodyPage';
import SignInPage from './pages/SignInPage/SignInPage';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import UserPage from './pages/UserPage/UserPage';
import HomePage from './pages/HomePage/HomePage';
import SignUpAccessPage from './pages/SignUpAccessPage/SignUpAccessPage';
import SignUpBloodPage from './pages/SignUpBloodPage/SignUpBloodPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';

const test = import.meta.env.VITE_API_TEST;

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, []);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="params">
            <Route path="body" element={<SignUpBodyPage />} />
            <Route path="blood" element={<SignUpBloodPage />} />
            <Route path="access" element={<SignUpAccessPage />} />
          </Route>
          <Route path="signin" element={<SignInPage />} />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="exercises" element={<ExercisesPage />} />
          <Route path="profile" element={<UserPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    )
  );
}
export default App;
