import { createContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import CurrentUser from "./pages/CurrentUser";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const GlobalContext = createContext()
const api = "http://localhost:5173"

function App() {
  return (
    <GlobalContext.Provider value={{ api }} >
      <BrowserRouter>
        <Navbar />

        <div className="p-10">
          <h1 className="text-xl text-blue-500 font-bold">
            Agile Flow Running
          </h1>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/me" element={<CurrentUser />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;