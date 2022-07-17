import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Student from '../pages/Student';
import Students from '../pages/Students';
import PrivateRoute from './PrivateRoute';
import User from '../pages/User';
import Photos from '../pages/Photos';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute component={Students} isClosed={false} />}
      />
      <Route
        path="/login"
        element={<PrivateRoute component={Login} isClosed={false} />}
      />
      <Route
        path="/user"
        element={<PrivateRoute component={User} isClosed={false} />}
      />
      <Route
        path="/student"
        element={<PrivateRoute component={Student} isClosed />}
      />
      <Route
        path="/student/:id/edit"
        element={<PrivateRoute component={Student} isClosed />}
      />
      <Route
        path="/photos/:id"
        element={<PrivateRoute component={Photos} isClosed />}
      />
      <Route
        path="*"
        element={<PrivateRoute component={Page404} isClosed={false} />}
      />
    </Routes>
  );
}
