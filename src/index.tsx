import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from '~react-pages';
import './index.css';

const container = document.querySelector('#root');
const root = createRoot(container);

function App() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}

root.render(
  <Router>
    <App />
  </Router>,
);
