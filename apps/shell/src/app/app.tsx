import * as React from 'react';

// import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';
import { Auth } from './Auth';

const About = React.lazy(() => import('about/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <nav>
        <ul className="flex gap-2 m-3">
          <li>
            <Link
              className="hover:underline hover:text-cyan-800 p-4 m-1 hover:text-lg transition-shadow"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-cyan-800 p-4 m-1 hover:text-lg transition-shadow"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-3">
        <Routes>
          <Route path="/" element={<Auth />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
