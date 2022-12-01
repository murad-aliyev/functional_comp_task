import React,{Component} from 'react'
import './style.css'

class Headerxxx extends Component {
 
  state = { 
    name: "",
    employees: [
      {
        "id": 1,
        "name": "Frodo Baggins",
        "department": "Management",
        "role": "CEO"
      },
      {
        "id": 2,
        "name": "Samwise Gamgee",
        "department": "Management",
        "role": "CTO"
      },
      {
        "id": 3,
        "name": "Gandalf the Gray",
        "department": "Recruitment",
        "role": "Lead-recruiter"
      },
      {
        "id": 4,
        "name": "Aragorn",
        "department": "Security",
        "role": "Security officer"
      },
      {
        "id": 5,
        "name": "Legolas",
        "department": "Management",
        "role": "Office manager"
      }
  ]
    };

  handleChange = (evt) => {
      this.setState({ name: evt.target.value });
   }
   render() {
    return (
      <div className="div">
         <input
            type="text"
            onChange={this.handleChange}
          />
         {this.state.employees
         .filter((user) => user.name.split("", this.state.name.length).join('').toLocaleLowerCase() == this.state.name.toLocaleLowerCase() )
         .map((user) => (
          <div className='div' key={user.id}>
                  <h2>Employee name: {user.name}</h2>
                  <h3>Department: {user.department}</h3>
                  <h3>Role: {user.role}</h3>
          </div>
         ))}
      </div>
    );
  }

  // render() {
  //     return this.state.employees.map((user) => {
  //       return ( 
  //        <div className='div' key={user.id}>
  //          <h2>Employee name: {user.name}</h2>
  //          <h3>Department: {user.department}</h3>
  //          <h3>Role: {user.role}</h3>
  //        </div>
  //       );
  //     });
      
  //    }
     
  }

 export default Headerxxx