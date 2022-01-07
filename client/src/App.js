import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactList from './Components/ContactList';
import Navbare from './Components/Navbar';
import AddContact from './Components/AddContact';
import Contactdetails from './Components/Contactdetails'


function App() {
  return (
    <div className="App">
    <Navbare></Navbare>

    <Routes>
      <Route  path='/contacts'  element={<ContactList></ContactList>} />
      <Route  path='/addcontact'  element={<AddContact></AddContact>} />
      <Route  path='/edit/:id'  element={<AddContact></AddContact>} />
      <Route  path='/contacts/:id'  element={<Contactdetails></Contactdetails>} />
    </Routes>
    </div>
  );
}

export default App;
