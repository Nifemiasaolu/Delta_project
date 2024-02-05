import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyles";
import { Home, PricingPage, Signup } from "./Pages";
import { Footer, Navbar } from "./Components";

function App() {
  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

// /////