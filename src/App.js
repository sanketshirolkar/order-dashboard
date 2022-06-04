import './App.css';
import Table from './components/table/Table';
import { tableRows } from './components/table/tableRows';
import { seedData } from './seedData';

function App() {
  return (
    <div className="App">
      <Table  rows={tableRows} data={seedData} />
    </div>
  );
}

export default App;
