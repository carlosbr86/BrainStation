class App extends React.Component{
	constructor(){
		super();
		this.state = {
			todos:[
	            {text: 'Improve english speaking skill', done: false, id: 1},
	            {text: 'Buy a sofa', done: false, id: 2},
	            {text: 'Get a Job', done: false, id: 3},
	            {text: 'Learn React', done: true, id: 4}
	        ],
			id:4,
			newTask:'',
			visibility: 'all',
			noCompleted: false,
		}
		this.addNewToDo=this.addNewToDo.bind(this);
		this.handleTextNewTask= this.handleTextNewTask.bind(this);
		this.handleCheckBox = this.handleCheckBox.bind(this);
		this.clearComplete =  this.clearComplete.bind(this);
		this.viewSelection = this.viewSelection.bind(this);
		this.deleteToDo = this.deleteToDo.bind(this);
		this.selectAll = this.selectAll.bind(this);
	}

	selectAll(e){
		e.preventDefault();
		let updatedTodo = this.state.todos.map((todo,key)=>{
			if(this.state.noCompleted=== true){
				todo.done = true;
				return todo;
			}
			else{
				todo.done = false;
				return todo
				
			}
		})
		this.setState({
			todos : updatedTodo,
			noCompleted: !this.state.noCompleted
		})

	}


	handleTextNewTask(e) {
		if (e.target.value.trim()===""){
			alert("Error! Type a task!")
		}
		else{
		this.setState({
			newTask : e.target.value.trim()
		})
		}
	}

	addNewToDo(e) {
		e.preventDefault();
		let newToDo = [{text: this.state.newTask, done: false, id: this.state.id+1}]
		this.setState({
			todos: this.state.todos.concat(newToDo), id: this.state.id + 1, newTask: ''
		})
	}

	handleCheckBox(e,id) {
		let tempAllClean = true;
		let updatedArray= this.state.todos.map((toDo)=>{

			if(id===toDo.id){
				return toDo = {
					text: toDo.text,
					done: !toDo.done,
					id: toDo.id
				}
			}
			else return toDo 
		})
 		let x= updatedArray.map((toDo)=>{
			if(toDo.done == true){
				tempAllClean=false;
			}
			return null;
		 })
		this.setState({
			todos : updatedArray,
			noCompleted: tempAllClean
		})
  	}

	
	clearComplete(e) {
		e.preventDefault();
		let updatedArray= this.state.todos.filter((itens)=>{
			return itens.done===false;
		})
		this.setState({
			todos : updatedArray,
			noCompleted: true
		})
	}

	deleteToDo(e,index){
		e.preventDefault();
		let updatedArray  = this.state.todos;
		updatedArray.splice(index,1);
		this.setState({
			todos : updatedArray,
		})

	}

	viewSelection(e){
		this.setState({
			visibility: e.target.value
		})
	}

	render(){
		return(
			<div className="container">
				<h1 className="text-center">ToDos</h1>
				<AddNewToDoBox addNewToDo={this.addNewToDo} toDoList={this.state.todos} id={this.state.id}
					 handleTextNewTask={this.handleTextNewTask} newTask={this.state.newTask} />
				<ToDoList toDoList={this.state.todos} handleCheckBox={this.handleCheckBox} visibility={this.state.visibility} deleteToDo={this.deleteToDo}/>
				<View viewSelection={this.viewSelection}  selectAll={this.selectAll} clearComplete={this.clearComplete} noCompleted={this.state.noCompleted}/>
			</div>
		)
	}

}


class AddNewToDoBox extends React.Component{
	constructor(props) {
		super(props);
  	}	
	render(){
		return(
			<form>
				<div className="input-group">
					<span className="input-group-btn">
						<button disabled={this.props.newTask===""?true:false}onClick={this.props.addNewToDo} className="btn btn-primary" type="submit">Add</button>
					</span>
					<input className="form-control" id="inputBox" placeholder="add a todo" value={this.props.newTask}
          				onChange={this.props.handleTextNewTask}/>
				</div>	
			</form>
		)
	}
}


class ToDoList extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
			<ul className="list-group">
				{this.props.toDoList.map((toDo,i)=>{
					return(
						<li className={toDo.done&&(this.props.visibility!=='active') ||!toDo.done&&(this.props.visibility!=='complete') ?
							 "list-group-item ":  "visibility list-group-item " } >
							<input type="checkbox" checked={toDo.done} onChange={ (e) => {this.props.handleCheckBox(e,toDo.id)} } />
							<label className= {toDo.done ? "done" : ""} >{i+1} - {toDo.text}</label>
							<span className="glyphicon glyphicon-remove right" aria-hidden="true" onClick={(e)=>{this.props.deleteToDo(e,i)}}></span>
						</li>
					)
				})}
			</ul>
		)
	}
}


class View extends React.Component{
	render(){	
		return(
			<div>
				<select id="selectOpt" onChange={(e)=>{this.props.viewSelection(e)}} >
					<option value="all">all</option>
					<option value="active">active</option>
					<option value="complete">complete</option>
				</select>
				<button className="pull-right btn btn-primary" disabled={this.props.noCompleted} onClick={this.props.clearComplete}>Clear Complete</button>
				<button className="pull-right btn btn-primary" onClick={this.props.selectAll}>{this.props.noCompleted?"Select All" :"Unselect All"}</button>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('app'));
