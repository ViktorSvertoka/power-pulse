import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

import ErrorPage from './pages/ErrorPage/ErrorPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignUpBodyPage from './pages/SignUpBodyPage/SignUpBodyPage';
import SignInPage from './pages/SignInPage/SignInPage';
import DiaryPage from './pages/DiaryPage/DiaryPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ExercisesPage from './pages/ExercisesPage/ExercisesPage';
import UserPage from './pages/UserPage/UserPage';
import HomePage from './pages/HomePage/HomePage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';

function App() {
  const dispatch = useDispatch();
  const { goToParams, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={isLoggedIn ? <Navigate to="/diary" replace /> : <HomePage />}
        />
        <Route
          path="signup"
          element={
            goToParams ? <Navigate to="/params" replace /> : <SignUpPage />
          }
        />
        <Route
          path="params"
          element={
            goToParams ? <SignUpBodyPage /> : <Navigate to="/diary" replace />
          }
        />

        <Route
          path="signin"
          element={
            isLoggedIn ? <Navigate to="/diary" replace /> : <SignInPage />
          }
        />
        <Route
          path="diary"
          element={isLoggedIn ? <DiaryPage /> : <Navigate to="/" />}
        />
        <Route
          path="products"
          element={!isLoggedIn ? <Navigate to="/" /> : <ProductsPage />}
        />
        <Route
          path="exercises"
          element={!isLoggedIn ? <Navigate to="/" /> : <ExercisesPage />}
        />
        <Route
          path="profile"
          element={!isLoggedIn ? <Navigate to="/" /> : <UserPage />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
