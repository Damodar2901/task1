import React, { Component } from 'react'
import Comp2 from './Comp2'
import logo2 from '../assets/logo2.png'
import '../components/comp.css'


export default class Comp1 extends Component {
    state={
        image:logo2,
        name:'Matrical Technologies Pvt Ltd',
        place:'Bangalore',
        Number:"+91 9123456789",
        area:'RR Nagar'
        
    }
  render() {
    return (
      <div>


        <center>
            <div className='con'>
            <Comp2 image={this.state.image}/>
            <Comp2 name={this.state.name}/>
            <Comp2 Number={this.state.Number}/>
            <Comp2 place={this.state.place}/>
            <Comp2 area={this.state.area}/>
            </div>
            
            </center>
        
      </div>
    )
  }
}
