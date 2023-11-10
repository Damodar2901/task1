import React from 'react'
import './card.css'
import Head from './Head';
import Footer from './Footer';
import hp from '../assets/hp.jpg'
import asus from '../assets/asus.jpg'
import leno from '../assets/leno.jpg'
import dell from '../assets/dell.jpg'
import realme from '../assets/realme.jpg'
import acer from '../assets/acer.jpg'
import ap from '../assets/ap.jpg'
import sm from '../assets/sm.jpg'

import { useState } from 'react';
const Card = () => {
  const data=[

    { id: 1,title:'HP',ctitle:'HP-12K5J',date:'9 Nov 2023', pic: hp, ctext:'HP Laptop 15s',processor:'Intel Pentium 3558U',storage:'1 TB 5400rpm',sm:'4GB DDR3-1600',gc:'Intel HD Graphics 3400',price:50000},
    { id: 2,title:'AS',ctitle:'ASUS-278HBF',date:'9 Nov 2023', pic: asus, ctext:'ASUS Vivobook 15 ',processor:'Intel Amd 6788U',storage:'500 GB 3400rpm',sm:'8GB DDR3-1800',gc:'Intel HD Graphics 4800',price:670000},
    { id: 1,title:'LV',ctitle:'Lenova-Ideapad',date:'9 Nov 2023', pic: leno, ctext:'Lenova Ideapad',processor:'Intel Core',storage:'256 GB 3400rpm',sm:'6GB DDR3-1200',gc:'Intel HD Graphics 2400',price:35000},
    { id: 1,title:'D',ctitle:'Dell',date:'9 Nov 2023', pic: dell, ctext:'Dell Inspiron',processor:'Intel Core i7',storage:'1 TB 6400rpm',sm:'4GB DDR3-1600',gc:'Intel HD Graphics 1900',price:72000},
    { id: 1,title:'R',ctitle:'Realme-Book',date:'9 Nov 2023', pic: realme, ctext:'Realme Book',processor:'Ryzen',storage:'512 GB 6400rpm',sm:'8GB DDR3-1600',gc:'Intel HD Graphics 3400',price:45000},
    { id: 1,title:'A',ctitle:'Acer',date:'9 Nov 2023', pic: hp, ctext:'Acer Nitro',processor:'Celeron',storage:'256 GB 5400rpm',sm:'6GB DDR3-1200',gc:'Intel HD Graphics 3700',price:55000},
    { id: 1,title:'AP',ctitle:'Apple Mac-Book',date:'9 Nov 2023', pic:ap , ctext:'Apple Mac-Book Pro',processor:'MAcBook',storage:'512 TB 4400rpm',sm:'4GB DDR3-1600',gc:'Intel HD Graphics 4500',price:78000},
    { id: 1,title:'SM',ctitle:'Samsung ',date:'9 Nov 2023', pic:sm , ctext:'Samsung Galaxy Book3',processor:'Intel Core 2 Duo',storage:'256 TB 6400rpm',sm:'4GB DDR3-1100',gc:'Intel HD Graphics 2900',price:48000},
    
  ];
 

  const[search,setSearch]=useState('');
  const handleInputChange=(e)=>{
    setSearch(e.target.value)
  }
 
  const fd=data.filter((items)=>{
    const itemSearched=search.toLowerCase();
    return(
   
        items.ctitle.toLowerCase().includes(itemSearched) ||
        items.date.toString().includes(itemSearched)||
        items.processor.toLowerCase().includes(itemSearched)||
        items.price.toString().includes(itemSearched) ||
        items.storage.toString().includes(itemSearched) 

      
    );
  });

  const rows = fd.map((item) => (
   
 
    <div className='Top'> 
   
    
    <div className="item">
    <div className="card">
    <div className="card-header">
      <div className="profile">
        <span className="letter">{item.title}</span>
      </div>
      <div className="card-title-group">
        <h5 className="card-title">{item.ctitle}</h5>
        <div className="card-date">{item.date}</div>
        
      </div>
    </div>
    <img className="card-image" src={item.pic} alt="Logo" />

    <div className="card-text">{item.ctext}</div>
   
    <div className="card-like-bar">
       
        <div>
          Processor:{item.processor}
        </div>
        <div>
          Storage:{item.storage}
        </div>
        <div>
          System Memory:{item.sm}
        </div>
        <div>
          Graphic Card:{item.gc}
        </div>
        <div >
          Price:&#8377;{item.price}
        </div>
        <br />
      <div className='click'>
      <button class="custom-button">Shop Now</button>
      </div>
      
    </div>
     
    </div>
  </div>
  </div>
  
  
  ));


   
  return (
    
    <div>
     <div>
     <Head/>
     <div className='sea'>Search:<input type="text"  value={search} onChange={handleInputChange} /></div>
     <div className='marquee'>
     <marquee behavior="scroll" direction="left">60% Off on Diwali Dhamaka Sale - Special Offers on Laptops</marquee>
     </div>
     <div  className="containera">
     
     {rows}
     </div>
     <Footer/>
     </div>
    
    </div>

  )
}

export default Card