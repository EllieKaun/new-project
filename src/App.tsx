import { Routes, Route } from "react-router-dom"
import { Main, Users, NotFound, Profile } from "./pages"
import { Header } from "./components/Base"

function App() {

  const user = localStorage.getItem('user')

  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="users" element={<Users/>}/>
          {user ? <Route path="profile" element={<Profile/>}/> : <></>}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
  )
}

export default App
