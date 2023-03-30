import React from 'react'

import Todo from './Todo'

const Main = React.memo((props) => {
	const shownPrefix = DecidePrefix()
	const CreateNewTodo = (todo) => {
		return (
			<Todo
				key={todo.id}
				value={todo.value}
				id={todo.id}
				type={todo.type}
				complite={props.complite}
				delete={props.delete}
			/>
		)
	}

	let todoElems = props.todo.map((todo, i) => {
		if (i == props.todo.length - 1) {
			return (
				<React.Fragment key={todo.id}>{CreateNewTodo(todo)}</React.Fragment>
			)
		} else {
			return (
				<React.Fragment key={todo.id}>
					{CreateNewTodo(todo)}
					<hr />
				</React.Fragment>
			)
		}
	})

	function DecidePrefix() {
		if (props.page == 'todo') {
			return ''
		} else if (props.page == 'completed') {
			return 'completed'
		} else if (props.page == 'deleted') {
			return 'deleted'
		}
	}

	if (todoElems.length < 1) {
		todoElems = (
			<div className='todo'>
				<p>{`NO ${shownPrefix.toUpperCase()} TODOS!`}</p>
			</div>
		)
	}
	return <div className='main'>{todoElems}</div>
})

export default Main
