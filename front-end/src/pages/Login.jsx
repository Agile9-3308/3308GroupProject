// src/pages/Login.jsx
import { useState } from "react"

function Login() {

  const newForm = {
    username: "",
    password: ""
  }

  const [formData, setFormData] = useState(newForm)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function showFormData(e) {
    e.preventDefault
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault
    console.log(formData)
  }

  return (
    <div id="login-form" className="p-10">
      <h2 className="text-2xl font-bold">Login</h2>

      <form onSubmit={handleSubmit} >
        <label for="username">Username:</label><br/>
        <input type="text" placeholder="Please Enter Username..." id="username" name="username" value={formData.username} onChange={handleChange} /><br/>

        <label for="password">Password:</label><br/>
        <input type="password" placeholder="Please Enter Password..." id="password" name="password" value={formData.password} onChange={handleChange} /><br/>

        <button type="submit" className="bg-green-300 rounded-md px-2">Submit</button>
      </form>

      <br/>
      <button onClick={showFormData} className="bg-slate-300 rounded-md px-2">console.log(formData)</button>
    </div>
  );
}



export default Login;