import { Routes, Route } from "react-router-dom"
import { Main, Users } from "./pages"
import { Header } from "./components/Base"

function App() {

  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="users" element={<Users/>}/>
        </Routes>
      </>
  )
}

export default App
