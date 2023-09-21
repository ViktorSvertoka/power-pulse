// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';

// export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn } = useAuth();
//   console.log(isLoggedIn);

//   return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Component />;
// };

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
// };
