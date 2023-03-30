import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
	const [page, setPage] = useState('todo')
	const [allTodo, setAllTodo] = useState([]) //all items
	const [todo, setTodo] = useState([]) //only todo
	const [deleted, setDeleted] = useState([]) //deleted items
	const [completed, setCompleted] = useState([]) //complited items
	const [input, setInput] = useState('')
	let shownItems = DecideShownItems()
	function DecideShownItems() {
		switch (page) {
			case 'todo':
				return todo
				break
			case 'deleted':
				return deleted
				break
			case 'completed':
				return completed
				break
		}
	}

	useEffect(() => {
		setTodo(allTodo.filter((todo) => todo.type == 'todo'))
		setDeleted(allTodo.filter((todo) => todo.type == 'deleted'))
		setCompleted(allTodo.filter((todo) => todo.type == 'completed'))
	}, [allTodo])

	function GenerateTodo() {
		return { value: input, type: 'todo', id: nanoid() }
	}

	function OnChange(e) {
		const { value } = e.target
		setInput(value)
	}

	function AddTodo() {
		setAllTodo([...allTodo, GenerateTodo()])
		setInput('')
	}

	function CompleteTodo(id) {
		setAllTodo(
			allTodo.map((todo) => {
				return todo.id == id ? { ...todo, type: 'completed' } : { ...todo }
			})
		)
	}

	function DeleteTodo(id) {
		setAllTodo(
			allTodo.map((todo) => {
				return todo.id == id ? { ...todo, type: 'deleted' } : { ...todo }
			})
		)
	}

	function ChangePage(cPage) {
		setPage(cPage)
	}

	return (
		<div className='cont'>
			<Header page={page} onChange={OnChange} add={AddTodo} input={input} />
			<Main
				page={page}
				todo={shownItems}
				delete={DeleteTodo}
				complite={CompleteTodo}
			/>
			<Footer page={page} changePage={ChangePage} />
		</div>
	)
}

export default App
