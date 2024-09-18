import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KidsWear from "./view/kidsWear";
import Main from "./main/main";
import Analytics from "./view/analytics";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kidswear" element={<KidsWear />} />
        <Route path="/analytics" element={<Analytics />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
