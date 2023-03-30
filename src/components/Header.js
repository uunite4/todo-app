import React from 'react'

function Header(props) {
	return (
		<div className='nav'>
			<h1>TO DO APP ({props.page.toUpperCase()})</h1>
			<div>
				<input
					onChange={props.onChange}
					value={props.input}
					type='text'
					placeholder='add new todo'
				/>
				<button onClick={props.add} className='add'>
					+
				</button>
			</div>
		</div>
	)
}

export default Header
