import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <div className="dark flex flex-col min-h-screen">
          <div className="flex flex-grow">
            <Navbar />
            <main className="flex-grow p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes> 
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App