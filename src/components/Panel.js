import React from 'react';
import AddCategory from "./AddCategory";

// categories = [{
// 	title: "Название",
// 	hash: "hash",
// 	id: 1,
// 	description: "text",
// }]

const renderCategoryList = categories => 
	categories.map((cat, i) => <li><a>{cat.title}</a></li>)

class Panel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAdding: false,
		}
	}

	render() {
		const { categories, onAddCategory } = this.props;

		return (
			<div className="panel">
				<p className="panel-heading">
					<label className="label">Поиск</label>
				</p>
				<div className="panel-block">
					<p className="control has-icons-left">
						<input className="input" type="text" placeholder="Поиск по категориям" />
						<span className="icon is-small is-left">
							<i className="fa fa-search"></i>
						</span>
					</p>

				</div>
				<div className="menu category-list">
					{categories ?
						<ul className="menu-list">{renderCategoryList(categories)}</ul>
						: 
						<span>Загрузка..</span>
					}
					
					{/* <a className="is-active">all</a>
                    <a>Job</a>
                    <a>Family</a>
                    <a>Bussines</a>
                    <a>Other</a> */}
				</div>
				<div className="category-add-form">
					{this.state.isAdding ? 
						<AddCategory onCancel={() => {
							this.setState({
								isAdding: false,
							})
						}} onAddCategory={onAddCategory} />
						:
						<button onClick={() => {
							this.setState({
								isAdding: true
							})
						}} className="button is-primary">Добавить категорию</button>
					}
				</div>
			</div>
		)
	}
}




export default Panel;