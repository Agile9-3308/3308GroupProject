// src/pages/Signup.jsx
import { useState } from "react"

function Signup() {
  const newForm = {
      name: "",
      role: "",
      isAdmin: false,
      username: "",
      email: "",
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
        <h2 className="text-2xl font-bold">Sign Up</h2>
  
        <form onSubmit={handleSubmit} >

          <label for="name">Name:</label><br/>
          <input type="text" placeholder="Please Enter Name..." id="name" name="name" value={formData.name} onChange={handleChange} /><br/>

          <label for="role">Role:</label><br/>
          <input type="text" placeholder="Please Enter Role..." id="role" name="role" value={formData.role} onChange={handleChange} /><br/>

          <label for="is-admin">Is Admin:</label><br/>
          <select type="checkbox" id="is-admin" name="isAdmin" value={formData.isAdmin} onChange={handleChange} >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select><br/>

          <label for="email">Email:</label><br/>
          <input type="email" placeholder="Please Enter Email..." id="email" name="email" value={formData.email} onChange={handleChange} /><br/>

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

export default Signup;