// src/App.jsx

import ResponsiveGrid from './components/ResponsiveGrid';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-700 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Responsive Drag-and-Drop Grid</h1>
      </header>
      <main className="container mx-auto my-8">
        <ResponsiveGrid />
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p className='font-bold'>TASK COMPLETED</p>
      </footer>
    </div>
  );
};

export default App;
