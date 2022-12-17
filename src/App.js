import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks : [
        {desc : "Montassar", isDone : false, id : Math.random()},
        {desc : "Riadh", isDone : true, id : Math.random()},
        {desc : "Amine", isDone : false, id : Math.random()}
      ],
      textP : ''
    }
  }
  // handleAdd=()=>this.state.textP === "" ?  alert('Le champ est vide')  :this.setState({tasks : [...this.state.tasks,{desc : this.state.textP,isDone : false, id : Math.random()}]})}
  handleAdd=()=>{
    if (this.state.textP == "") {
      alert('Le champ est vide') 
    } else {
      this.setState({tasks : [...this.state.tasks,{desc : this.state.textP,isDone : false, id : Math.random()}]})
      this.setState({textP : ''})
    }
  }
  handleDelete=(a)=> this.setState({tasks : this.state.tasks.filter(el => el.id != a)})
  handleDone=(a)=> this.setState({tasks : this.state.tasks.map(el => el.id == a ? {...el,isDone : !el.isDone} : el)})
  render(){
    return(
      <div>
        <h1>TODO LIST</h1>

        {
          this.state.tasks.map(el=> 
            <div>
              <h1 className={el.isDone && 'done'}>{el.desc}</h1>
              {/* <h2>{el.isDone ? 'True' : 'False'}</h2> */}
              <button onClick={()=>this.handleDelete(el.id)}>Delete</button>
              <button onClick={()=> this.handleDone(el.id)}>{el.isDone ? 'Undone' : "Done"}</button>
            </div>)
        }
        <br/>
        <input value={this.state.textP} type="text" onChange={(e)=>this.setState({textP : e.target.value})}/>
        <button onClick={this.handleAdd}>Add</button>

        
      </div>
    )
  }
}

export default App;
