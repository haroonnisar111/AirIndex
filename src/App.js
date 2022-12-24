import React from 'react';
import './App.css';
import DataTable from './DataTable/DataTable';
import SearchBox from './searchBox/SearchBox';

function App() {
  const [data, setData] = React.useState([]);

  return (
    <div className='App'>
      <SearchBox setData={setData} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
