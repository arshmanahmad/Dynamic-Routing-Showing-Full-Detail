import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UserShow from './UserShow'
const App = () => {
  const user = [
    { id: 1, name: "Shuja", work: "Senior-developer" },
    { id: 2, name: "Arshman", work: "junior-developer" },
    { id: 3, name: "Ahsan", work: "developer" }
  ]
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div>
              {user.map((item) => (
                <Link to={"/user/" + item.id + "/" + item.name + "/" + item.work}>
                  <h2>{item.name}</h2>
                </Link>
              ))}
            </div>} />
            <Route path="/user/:id/:name/:work" element={<UserShow />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App