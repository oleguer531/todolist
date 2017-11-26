import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      tempTask: newProps.task.task,
    })
  }

  render() {
    const { 
      task, 
      category, 
      date, 
      id, 
      isCompleted, 
      isEditing 
    } = this.props.task;

    console.log(this.state);
  return (
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {category.title}
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          {isEditing ? 
            <textarea className="textarea" defaultValue={this.props.task} value={this.state.tempTask} onChange={(e) => 
              this.setState({
                tempTask: e.target.value
              })
            } />
            :
            <span style={isCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{task}</span>
          }
          <br/>
          {/* <time datetime="2016-1-1">{date}</time> */}
        </div>
      </div>
      {!isEditing ? 
        <footer class="card-footer">
          <a href="#" onClick={() => {
            this.props.onDone(id);
          }} class="card-footer-item">{isCompleted ? "Не готово" : "Готово"}</a>
          <a href="#" class="card-footer-item" onClick={() => {
            this.props.onEdit(id);
          }}>Изменить</a>
          <a href="#" class="card-footer-item" onClick={() => {
            this.props.onRemove(id);
          }}>Удалить</a>
        </footer>
        :
        <footer class="card-footer">
        <a href="#" onClick={() => {
          this.props.onSave(id, this.state.tempTask);
          this.props.onEdit(id);
        }} class="card-footer-item">Сохранить</a>
        
      </footer>
      }
    </div>
    )
  }
}

export default Card;