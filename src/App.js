import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import auth from './Firebase/firebase.config';
import { getMe, setIsLoading } from './Redux/features/Auth/AuthSlice';
import { routers } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    try {
      dispatch(setIsLoading(true))
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(getMe())
        }
      });
    } catch (error) {
      dispatch(setIsLoading(false))
    } finally {
      dispatch(setIsLoading(false))
    }
  }, [dispatch]);






  return (
    <div>
      <RouterProvider router={routers} />
      <Toaster />
    </div>
  );
};

export default App;