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
    const key = e.target.name
    let value = e.target.value
    if (key === "isAdmin") value = value === "true"
    setFormData({ ...formData, [key]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  const fields = [
    { label: "Name",     id: "name",     type: "text",     placeholder: "Enter your name..." },
    { label: "Role",     id: "role",     type: "text",     placeholder: "Enter your role..." },
    { label: "Email",    id: "email",    type: "email",    placeholder: "Enter your email..." },
    { label: "Username", id: "username", type: "text",     placeholder: "Enter your username..." },
    { label: "Password", id: "password", type: "password", placeholder: "Enter your password..." },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="w-full max-w-sm">

        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-3 rounded-t-xl">
          <h1 className="text-xl font-bold text-gray-800">Sprint Dashboard</h1>
          <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
            Sign Up
          </span>
        </div>

        {/* Card */}
        <div className="border border-gray-200 rounded-b-xl p-6 bg-white shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Create an account</h2>

          <div className="space-y-3">
            {fields.map(({ label, id, type, placeholder }) => (
              <div key={id} className="space-y-1">
                <label htmlFor={id} className="text-sm font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  id={id}
                  name={id}
                  value={formData[id]}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
                />
              </div>
            ))}

            {/* isAdmin select — styled to match */}
            <div className="space-y-1">
              <label htmlFor="is-admin" className="text-sm font-medium text-gray-700">
                Admin access
              </label>
              <select
                id="is-admin"
                name="isAdmin"
                value={formData.isAdmin}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 bg-white text-gray-700"
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Create account
          </button>

          <p className="text-xs text-center text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Signup