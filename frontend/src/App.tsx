import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div className="bg-gray h-screen flex p-4">
      <Sidebar type="student" />
      <h1 className="text-3xl font-bold underline text-center">Hello world!</h1> 
    </div>
  )
}

export default App
