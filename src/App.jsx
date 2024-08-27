
import React, { useState } from "react";
import Routes from "./Routes";
import Footer from "./Frontend/pages/Footer/Footer";
import Nav2 from "./Frontend/pages/Header/Nav2";
import SignUp from "./Auth/SignUp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      <header>
        <Nav2 />
      </header>

      <main>
        {isLoggedIn ? <SignUp onLogin={() => setIsLoggedIn(false)}/> : <Routes />}

      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

