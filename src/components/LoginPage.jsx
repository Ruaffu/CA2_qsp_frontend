import React, { useState, useEffect } from "react"
import facade from "../apiFacade";
import "../styles/LoginPage.css";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
  }

  return (

    <div className="smaller-container">
      <div className="login-section">
        <h2>Log in</h2>
        <form onChange={onChange} >
          <input type="text" placeholder="User Name" id="username" />
          <input type="pasword" placeholder="Password" id="password" />
          <button className="login-button" onClick={performLogin}>Login</button>
        </form>
      </div>
    </div>

  )

}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")

  useEffect(() => {
    facade.fetchUserInfo().then(data => setDataFromServer(data));
  }, [])

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>Hello {dataFromServer.userName} Role: {dataFromServer.roles}</h3>
    </div>
  )

}

function LoginPage() {
  const [loggedIn, setLoggedIn] = useState(false)

  const logout = () => {
    facade.logout()
    setLoggedIn(false)
  }
  const login = (user, pass) => {
    facade.login(user, pass)
      .then(res => setLoggedIn(true));
  }

  return (
    <main>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn />
          <button onClick={logout}>Logout</button>
        </div>)}
    </main>
  )

}
export default LoginPage;
