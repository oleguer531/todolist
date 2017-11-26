import React from "react";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      description: null,
    }
  }

  setField(field, value) {
    this.setState({
      [field]: value,
    })
  }

  render() {
    const { onAddCategory, onCancel } = this.props;

    return (
      <div className="form">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input 
              className="input" 
              type="text"
              value={this.state.title || ""}
              name="title"
              placeholder="Название категории"
              onChange={(event) => {
                this.setField(event.target.name, event.target.value);
              }}
            />
            <span className="icon is-small is-left">
              <i className="fa fa-tag"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input 
              className="input" 
              type="text"
              value={this.state.description || ""}
              placeholder="Описание" 
              name="description"
              onChange={(event) => {
                this.setField(event.target.name, event.target.value);
              }}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button className="button is-success" onClick={() => {
              onAddCategory(this.state);
            }}>
              Добавить
            </button>

            <button className="button is-light" onClick={onCancel}>Отмена</button>
          </p>
        </div>
      </div>
    );
  }
}

export default AddCategory;