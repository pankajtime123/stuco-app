import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth/Auth'
import Profile from './pages/Profile/Profile'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Chat from './pages/Chat/Chat'
import LeftSide from './components/LeftSide/LeftSide'
import RightSide from './components/RightSide/RightSide'
import People from './components/People/People'

function App() {
  const user = useSelector((state) => state.authReducer.authData)
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === 'http://localhost:3000/chat'
            ? 'calc(100vh - 2rem)'
            : 'auto',
      }}
    >
      {/* <div className="blur" style={{ top: "-18%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
        */}
          {user && <Navbar />}
          

      <div className="main">

          <div className='left'>
             {user && <LeftSide/>}
          </div>
    
       <div className="center ">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="../auth" />}
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="../home" /> : <Auth />}
          />
          <Route
            path="/profile/:id"
            element={user ? <Profile /> : <Navigate to="../auth" />}
          />
             <Route
            path="/people"
            element={user ? <People /> : <Navigate to="../auth" />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />

          <Route
            path="/chat"
            element={user ? <Chat /> : <Navigate to="../auth" />}
          />
        </Routes>
        </div>
        <div className="right">
          {user && <RightSide/>}
        </div>
        </div>
    </div>
  )
}

export default App
