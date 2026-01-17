import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero';
import Repositories from './Components/Repositories';
// HeaderPicture のインポートは不要になるので削除

function Home() {
  return (
    <div className="flex flex-col items-center relative">
      <Hero />
      <main className="relative z-10 w-full max-w-4xl mx-auto py-12">
        {/* ここにホームの他のコンテンツを追加できます */}
      </main>
    </div>
  );
}

function RepositoriesPage() {
  return (
    // HeaderPicture を削除
    <div className="flex-1 py-12">
      <Repositories />
    </div>
  );
}

function RelatedPage() {
  return (
    // HeaderPicture を削除
    <div className="flex-1 py-12">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Related Links</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="https://maximum.vc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Maximumホームページ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/repositories",
    element: <RepositoriesPage />,
  },
  {
    path: "/related",
    element: <RelatedPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;