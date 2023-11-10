import React, { useState } from 'react'

const Table2 = () => {
    const data=[
        { id: 1, name: 'Alice', age: 25,Gender:'Male' },
        { id: 2, name: 'Bob', age: 30,Gender:'Male' },
        { id: 3, name: 'Carol', age: 35,Gender:'Male' },
        { id: 4, name: 'Hari', age:32,Gender:'Male'},
        { id: 5, name: 'Damodar', age:30 ,Gender:'Male'},
        
      ];
    const [search, setSearch]=useState('');
    const handleInputChange=(e)=>{
      setSearch(e.target.value);

    };
    const filterData=()=>data.filter((item)=>{
      const searchvalue=search.toLowerCase();
      return(
        item.name.toLowerCase().includes(searchvalue)
      )

    })
    const fd=data.filter((item)=>{
      const itemsearched=search.toLowerCase();
      return(
        
          item.name.toLowerCase().includes(itemsearched)||
          item. age.toString().includes(itemsearched)||
          item.id.toString().includes(itemsearched)
        
         
        
      )
    })
      const rows = fd.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.Gender}</td>
        </tr>
      ));
  return (
    <div>

<div>
        <h1>2</h1>
        <input type="text"  value={search} onChange={handleInputChange}/>
        
      <table border="1">
        
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>

        {rows}
      </tbody>
    </table>
    </div>
  

    </div>
  )
}

export default Table2