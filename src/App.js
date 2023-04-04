import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import auth from './Firebase/firebase.config';
import { getMe, setUser, userLogout } from './Redux/features/Auth/AuthSlice';
import { routers } from './Routes/Routes';

const App = () => {
  const { isError, error, isLoading, user } = useSelector((state => state?.auth));


  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {

      const newUser = { email: user?.email, photoURL: user?.photoURL, name: user?.displayName };

      if (user) {
        // dispatch(setUser(newUser));
        dispatch(getMe())
          .then(res => {
           /*  if (res.type !== "auth/getMe/fulfilled") {
              dispatch(userLogout())
            }
            console.log(res); */
          })

      }
    });
  }, [dispatch]);






  return (
    <div>

      <RouterProvider router={routers} />
    </div>
  );
};

export default App;