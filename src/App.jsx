import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import InscriptionPage from './pages/InscriptionPage.jsx';

function NotFound() {
  return (
    <div className="container page">
      <h1>404 - Page introuvable</h1>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<ProjectsPage />} />
          <Route path="/formations" element={<CoursesPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
