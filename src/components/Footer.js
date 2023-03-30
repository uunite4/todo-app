import React from 'react'

function Footer(props) {
	return (
		<div className='footer'>
			<button
				onClick={() => {
					props.changePage('todo')
				}}
				className={props.page == 'todo' ? 'selected' : null}
			>
				Todo
			</button>
			<button
				onClick={() => {
					props.changePage('completed')
				}}
				className={props.page == 'completed' ? 'selected' : null}
			>
				Completed
			</button>
			<button
				onClick={() => {
					props.changePage('deleted')
				}}
				className={props.page == 'deleted' ? 'selected' : null}
			>
				Deleted
			</button>
		</div>
	)
}

export default Footer
