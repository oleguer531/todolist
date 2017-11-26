import React from 'react';
import Card from "./Card";

const List = ({ tasks, onRemove, onDone, onEdit, onSave }) => {
	if (tasks) {
		return <div className="task-list">
			{tasks.map(task => <Card onSave={onSave} onEdit={onEdit} onDone={onDone} onRemove={onRemove} task={task} />)}
		</div>
	} else {
		return <div>Загрузка</div>
	}
}


export default List;