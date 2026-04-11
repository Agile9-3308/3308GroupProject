import { createContext, useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getUsers } from "./api/api"

import Navbar from "./components/Navbar";
import ApiTest from "./components/ApiTest";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import CurrentUser from "./pages/CurrentUser";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export const GlobalContext = createContext()

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    getUsers()
    .then(res => {
      setCurrentUser(res.data[0])
    })
    .catch(err => {console.log(err)})
  }, [])

  console.log(currentUser)

  return (
    <GlobalContext.Provider value={{ currentUser }} >
      <BrowserRouter>
        <Navbar />

        <div className="p-10">
          <h1 className="text-xl text-blue-500 font-bold">
            Agile Flow Running
          </h1>

          {/* =========================
              API Test Section
          ========================= */}
          {/* <ApiTest />  */}

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