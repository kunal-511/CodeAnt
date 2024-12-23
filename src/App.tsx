import LoginPage from "./pages/loginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RepoPage from "./pages/RepoPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/repo" element={<RepoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
