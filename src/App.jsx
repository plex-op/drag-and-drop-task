
import ResponsiveGrid from './components/ResponsiveGrid';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-4xl font-bold">Responsive Drag-and-Drop Grid</h1>
      </header>
      <main className="container mx-auto my-8">
        <ResponsiveGrid />
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p className='font-bold text-4xl'>Tech Stack</p>
        <ul className='unstyle  p-4 text-center'>
          <li className='text-1xl font-bold'>Frontend Framework : React</li>
          <li className='text-1xl font-bold'>Styling : Tailwind Css</li>
          <li className='text-1xl font-bold'>State Management : React Context API</li>
          <li className='text-1xl font-bold'>Drag and Drop : @hello-pangea/dnd</li>
          <li className='text-1xl font-bold'>Local Storage : Browser Local Storage API</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
