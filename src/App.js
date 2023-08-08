import React from 'react';
import logo from './bird_2.png';
import './App.css';

//creating app with Class
class App extends React.Component{

constructor(props){
  super(props);
  this.state={
    newItem:"",
    list : []
  };
}

 addItem(todoValue){
   if(todoValue!==""){
    const newItem={
      id: Date.now(),
      value: todoValue,
      isDone: false
    };
    const list=[...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    });
   }
 }

 deleteItem(id){
  const list =[...this.state.list];
  const updatedlist= list.filter(item=>item.id !=id);
  this.setState({list: updatedlist})
  }

  updateInput(input){
    this.setState({newItem:input});
  }

render(){
  return(
  <div>
    <img src={logo} width="100" height="100" alt='bird image' className='logo' />
    <h1 className="app-title">sudhir to o app</h1>
    <div className="container">
      Add an item.....
      <br/>
      <input 
      type="text" 
      className="input-text" 
      placeholder="Write a to do" 
      required 
      value={this.state.newItem}
      onChange={e=> this.updateInput(e.target.value)}
      />
      <button 
      className="add-btn"
      onClick={() => this.addItem(this.state.newItem)}
      disabled={!this.state.newItem.length}
      >Add Todo</button>
     <div className="list">
      <ul>
        {this.state.list.map(item => {
          return(
            <li key={item.id}>
              <input 
              type="checkbox"
              name="idDone"
              checked={item.isDone}
              onChange={()=>{}}
              />
              {item.value}
              <button
              className="btn"
              onClick={()=>this.deleteItem(item.id)}
              >
                DELETE
              </button>
            </li>
          );
        })}
        <li>
          <input type="checkbox" name="" id=""/>
          Record your youtube video
          <button className="btn">Delete</button>
        </li>
      </ul>
     </div>
    </div>
  </div>
  );
}
}

export default App;



// creating app with functions
// function App(){
//   return(
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo'></img>
//         <p>Learn React with sudhir</p>
//       </header>
      
//     </div>
//   ); 
// }


//export default App;