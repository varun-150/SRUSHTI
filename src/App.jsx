import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Auth } from './pages/Auth';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Courses } from './pages/Courses';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </PageLayout>
    </Router>
  )
}

export default App;
