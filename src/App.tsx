import { Routes, Route } from "react-router-dom"
import { Main, Users, NotFound, Profile, Photos, Albums } from "./pages"
import { Footer, Header } from "./components/Base"

function App() {

  const user = localStorage.getItem('user')

  return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="users" element={<Users/>}/>
          <Route path="photos" element={<Photos/>}/>
          <Route path="albums" element={<Albums/>}/>
          {user ? <Route path="profile" element={<Profile/>}/> : <></>}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </>
  )
}

export default App
