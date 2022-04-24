import { AppRouter } from "./routers/AppRouter";
import React, { useEffect, useReducer, useState } from 'react'
import { Loading } from "./components/loading/Loading"
import { AutContext } from "./auth/autContext";
import { authReducer } from "./auth/autReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading])


  return (
    <div>
      {
        loading
          ? (<Loading setLoading={setLoading} />)
          // : (<h1>Hola</h1>)
          : (
            <AutContext.Provider value={{ user, dispatch }}>
              <AppRouter />
            </AutContext.Provider>
          )
      }
    </div>
  );
}

export default App;
