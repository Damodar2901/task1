import React from 'react'

import Register from './components/Register'
import Login1 from './components/Login1';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Table1 from './components/Table1';

  import Table2 from './components/Table2';
import Card from './components/Card';
import Head from './components/Head';
import Footer from './components/Footer';
import Comp1 from './components/Comp1';



const App = () => {
  return (
    <div>
     <Router>
      <Routes>
               <Route path='/regis' element={<Register/>}/>
               <Route path='/login1' element={<Login1/>}/>
               <Route path='/table2' element={<Table2/>}/>
               <Route path='/card' element={<Card/>}/>
               <Route path='/head' element={<Head/>}/>
               <Route path='/footer' element={< Footer />}/>
                <Route path='/' element={<Comp1/>}/>
               
            

               

      
        
      
      </Routes>
     </Router>
      
    </div>
  )
}

export default App