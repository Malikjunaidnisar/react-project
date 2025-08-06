import {useState} from'react'
const Todo =()=>{
const [index,setIndex]=useState(0)
const [isEdit,setIsEdit]=useState(false)
const [task,setTask]=useState('')
const [todos,setTodos]=useState([])
const handleTask =(e)=>{
	setTask(e.target.value)
}
const handleSubmit=(e)=>{
	e.preventDefault()
	if(!task.trim()){
		alert(`This Feild can't be empty`)
		return
	}
	setTodos([task,...todos])
	setTask('')
}
const handleDeleteTodo=(text)=>{
	const deleteTodo =todos.filter((todo)=>(
		todo!==text
	))
	setTodos(deleteTodo)
	
}
const handleUpdateTodo=(text,e)=>{
	//const updateIndex = todos.findIndex(todo=>todo === text)
    e.preventDefault()
	
	todos[index] = text 
	setTodos([...todos])
	
	setIsEdit(!isEdit)
	

}

const handleEdit=(e,i)=>{
	setIsEdit(!isEdit)
	setTask(e)
	setIndex(i)

	
}
	return(
		<>
		<h1 className="text-xl text-center">Todo List</h1>
		<section>
			<form onSubmit={isEdit?(e)=>handleUpdateTodo(task,e):handleSubmit}>
				<label htmlFor='todo-list' className='text-bolder ml-1 mr-2 mb-2'>Enter your data</label>
				<input className="pl-2 mb-2 border border-gray-400 rounded-lg " type="text" id="todo-list" value={task} onChange={handleTask}/>
				<button type="submit" className="border cursor-pointer bg-blue-500 rounded-xl w-full">{isEdit?'Update':"Submit"}</button>
			</form>
		</section>
		<section>
			<ul className='mt-3'>
				{todos.map((todo,i)=>(
				<div className='mb-1 flex gap-3 border '>
					
				<li key={i} className='ml-1 pl-2 rounded-lg w-60 m-3 border border-slate-500'>{todo}</li>
				
				
				<button className="w-20 border cursor-pointer mt-3 mb-3  bg-green-400 rounded-lg"  onClick={()=>handleEdit(todo,i)} disabled={isEdit}>Update</button>
				<button className="w-20 border cursor-pointer mt-3 mb-3  bg-red-400 rounded-lg" onClick={()=>handleDeleteTodo(todo)}>Delete</button>
				</div>
				))}
			</ul>
			{todos.length=== 0 && <p className="text-center text-2xl">No Todos Added</p>}
		</section>
		</>
	)
}
export default Todo
