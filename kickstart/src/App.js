import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Users from './pages/Users'
import Signup from './pages/Signup'

import User from './pages/User'
import {

  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>

          <Routes>
            <Route exact path='/' element={<PublicRoute>< Login /></PublicRoute>} />
            <Route exact path='/signup' element={<PublicRoute>< Signup /></PublicRoute>} />
            <Route exact path='/users' element={<PrivateRoute>< Users /></PrivateRoute>} />
            <Route exact path='/user/:id' element={<PrivateRoute>< User /></PrivateRoute>} />

          </Routes>

        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </QueryClientProvider>
    </>



  );
}

export default App;
