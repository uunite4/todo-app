import React from 'react'

function Todo(props) {
	if (props.type == 'todo') {
		return (
			<div className='todo'>
				<span
					onClick={() => {
						props.complite(props.id)
					}}
					className='material-symbols-outlined'
				>
					done
				</span>
				<p>{props.value}</p>
				<span
					onClick={() => {
						props.delete(props.id)
					}}
					className='material-symbols-outlined'
				>
					delete
				</span>
			</div>
		)
	} else if (props.type == 'completed') {
		return (
			<div className='todo'>
				<p>{props.value}</p>
			</div>
		)
	} else if (props.type == 'deleted') {
		return (
			<div className='todo'>
				<p>{props.value}</p>
			</div>
		)
	}
}

export default Todo
