import Sidebar from './components/Sidebar';
import Panel from './components/Panel';

function App() {
  return (
    <>
      <div className='flex'>
        <Sidebar className="grow"/>
        <Panel className="grow-[2]"/>
      </div>
    </>
  );
}

export default App;
