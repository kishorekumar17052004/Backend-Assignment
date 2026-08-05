import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const navigate = useNavigate()

  return (
    <section className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
      <p className="text-gray-700 mb-4">Welcome to the dashboard.</p>
      <button onClick={() => navigate('/login')} className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
    </section>
  )
}

export default Dashboard