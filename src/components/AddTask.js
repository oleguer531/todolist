import React from "react";

const renderCategoriesList = categories => categories.map(cat => 
  <option value={cat.hash}>{cat.title}</option>
)

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
      category: null,
      isCompleted: false,
    }
  }

  setField(field, value) {
    this.setState({
      [field]: value,
    })
  }

  render() {
    const { categories, onClose, onAddTask } = this.props;

    return (
      <div className="form">
        <div className="field">
        <p className="control">
        <textarea 
          className="textarea"
          name="task"
          onChange={(event) => {
            this.setField(event.target.name, event.target.value); // document.getElementById("id") = event.target
          }} 
          type="text" 
          placeholder="Description"
        />
      </p>
        </div>
        <div className="field">
          <p className="control">
            <div className="select">
              <select 
                name="category"
                onChange={(event) => {
                  this.setField(event.target.name, event.target.value);
                }}
              >
                {renderCategoriesList(categories)}
              </select>
            </div>
          </p>
         
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={() => {
              onAddTask(this.state);
            }}>
              Добавить
            </button>
            <button className="button is-light" onClick={onClose}>Отмена</button>
          </p>
        </div>
      </div>
    );
  }
}

export default AddTask;