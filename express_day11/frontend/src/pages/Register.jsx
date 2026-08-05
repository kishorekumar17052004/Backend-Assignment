import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { regsiterUser } from "../api/axios"

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" })
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await regsiterUser(form)
      navigate('/login')
    } catch (err) {
      alert(err?.response?.data?.msg || err?.message || 'Registration failed')
    }
  }

  return (
    <section className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} className="mt-1 block w-full rounded border-gray-300 shadow-sm" />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Register</button>
      </form>
    </section>
  )
}

export default Register