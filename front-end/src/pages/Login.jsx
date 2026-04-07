// src/pages/Login.jsx
import { useState } from "react"

function Login() {
  const newForm = { username: "", password: "" }
  const [formData, setFormData] = useState(newForm)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-sm">

        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-3 rounded-t-xl">
          <h1 className="text-xl font-bold text-gray-800">Sprint Dashboard</h1>
          <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
            Login
          </span>
        </div>

        {/* Card */}
        <div className="border border-gray-200 rounded-b-xl p-6 bg-white shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Welcome back</h2>

          <div className="space-y-3">
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username..."
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password..."
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-2 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Sign in
          </button>

          <p className="text-xs text-center text-gray-400">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-500 hover:underline">
              Create one
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login