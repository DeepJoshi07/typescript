import fetchUsers from "./lib/fetchUser"
import Form from "./components/Form"

fetchUsers()

const App = () => {
  return (
    <div className="bg-slate-700 min-h-screen p-5">
      <Form/>
    </div>
  )
}

export default App