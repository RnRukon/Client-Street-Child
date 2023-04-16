import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import auth from './Firebase/firebase.config';
import { getMe } from './Redux/features/Auth/AuthSlice';
import { routers } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

const App = () => {



  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {



      if (user) {
        // dispatch(setUser(newUser));
        dispatch(getMe())
          .then(res => {

          })

      }
    });
  }, [dispatch]);






  return (
    <div>

      <RouterProvider router={routers} />
      <Toaster />
    </div>
  );
};

export default App;