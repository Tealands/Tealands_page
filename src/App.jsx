import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero';
import Repositories from './Components/Repositories';
import Header from './Components/Header';
import Banners from './Components/Banners';

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 p-4 relative">
      <div className="flex flex-col md:flex-row gap-8 max-w-[1600px] mx-auto">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center">
          <Header>
            <Hero />
          </Header>

          <main className="relative z-10 w-full max-w-4xl mx-auto py-12">
            {/* ここにホームの他のコンテンツを追加できます */}
          </main>
        </div>

        {/* Sidebar/Banners Area */}
        <div className="w-full md:w-80 shrink-0 mt-8 md:mt-0">
          <div className="sticky top-4">
            <Banners />
          </div>
        </div>
      </div>
    </div>
  );
}

function RepositoriesPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header title="Repositories" subtitle="My projects and contributions" />
      <div className="flex-1 py-12">
        <Repositories />
      </div>
    </div>
  );
}

function RelatedPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header title="Related Sites" subtitle="Explore related content" />
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
            {/* 他のリンクをここに追加 */}
          </ul>
        </div>
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
