import React from 'react';
import List from './List';
import Panel from './Panel';
import AddTask from './AddTask';
import Container from "../containers/Default";
import createHash from "../utils/createHash";
import Modal from "./Modal";
import db from "../db.json";

const renderModalHandler = () => 
	<button className="button is-primary">Добавить задание</button>

class App extends React.Component {
	constructor(props) {
		super(props);
		this.addTask = this.addTask.bind(this);
		this.deleteList = this.deleteList.bind(this);
		this.removing = this.removing.bind(this);
		this.done = this.done.bind(this);
		this.addCategory = this.addCategory.bind(this);
		this.editTask = this.editTask.bind(this);
		this.saveTask = this.saveTask.bind(this);
		this.state = {
			list: null,
			categories: null,
		}
	}

	componentDidMount() {
		this.setState({
			categories: db.categories,
			list: db.tasks,
		})
	}

	deleteList() {
		this.setState(state => ({
			list: []
		}))
	}

	addTask(newTask) {
		this.setState(state => ({
			...state,
			list: [
				{
					...newTask,
					id: + new Date(),
					isEditing: false,
				},
				...state.list],
		}))
	}

	editTask(id) {
		this.setState({
			list: this.state.list.map(item => {
				if (item.id === id) {
					return {
						...item,
						isEditing: !item.isEditing,
					}
				} else {
					return {
						...item,
					}
				}
			}),
		})
	}

	saveTask(id, newContent) {
		this.setState({
			list: this.state.list.map(item => {
				if (item.id === id) {
					return {
						...item,
						task: newContent
					}
				} else {
					return item
				}
			}),
		})
	}

	removing(id) {
		this.setState({
			list: this.state.list.filter(task => task.id !== id),
		})
	}
 
	done(id) {
		this.setState({
			list: this.state.list.map(item => {
					if (item.id === id) {
						return {
							...item,
							isCompleted: !item.isCompleted,
						}
					} else {
						return {
							...item,
						}
					}
				}),
		})
	}

	addCategory(newCategory) {
		this.setState(state => ({
			...state,
			categories: [{
				...newCategory,
				id: state.categories.length + 1,
				hash: createHash(newCategory.title),
			}, ...state.categories]
		}))
	}

	render() {
		console.log(this.state);
		return (
			<Container>
				<div className="columns">
					<div className="column is-narrow">
						<div className="box app_panel">
							<Panel 
								onAddCategory={this.addCategory} 
								categories={this.state.categories} 
							/>
						</div>
					</div>
					<div className="column">
						<div className="box">
							<Modal title="Добавление задания" handler={renderModalHandler()}>
								<AddTask onAddTask={this.addTask} categories={this.state.categories} />
							</Modal>
							{this.state.list && 
								<List
									tasks={this.state.list.map(task => ({
										...task,
										category: this.state.categories.filter(cat => cat.hash === task.category)[0]
									}))}
									onEdit={this.editTask}
									onDone={this.done}
									onRemove={this.removing}
									onSave={this.saveTask}
								/>
							}
						</div>
					</div>
				</div>
				{/*   <div className="">
                <h1 className="title app_todo">Todo list</h1>
               
                <div className="">
                    <div className="app_addForm">
                <div className="field has-addons has-addons-centered">
                    <div className="control">
                        <input className="input is-large app_input" id="newElement" type="text" placeholder="Введите текст" />
                    </div>
                    <div className="control">
                        <button className="button is-success is-large"onClick={this.addTask}>Добавить</button>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                 <List 
                    onRemove={this.removing} 
                    list={this.state.list}
                    onDone={this.done}
        /> */}
			</Container>
		);
	}
}
//<button onClick={this.deleteList}>Очистить</button>
export default App;