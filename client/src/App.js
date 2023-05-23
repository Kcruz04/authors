import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import CreateForm from "./components/CreateForm";
import Dashboard from "./components/Dashboard";
import UpdateOne from "./components/UpdateOne";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Main />} />
        <Route path='/create' element={<CreateForm />} />
        <Route path='/allComponents' element={<Dashboard />} />
        <Route path='/updateComponent/:id' element={<UpdateOne/>} />
      </Routes>
    </div>
  );
}

export default App;
