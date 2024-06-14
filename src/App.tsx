import { Routes, Route } from "react-router-dom"
import { Main, Users, NotFound } from "./pages"
import { Header } from "./components/Base"

function App() {


  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="users" element={<Users/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
  )
}

export default App
