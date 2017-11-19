import React from 'react';

class List extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
    return (
        <ul>{this.props.list.map((item, i) => <li key={i}>{item.message}
            <button onClick={() => {
                this.props.onRemove(item.id)
            }}>X</button>
            <button onClick={() =>{
                this.props.onDone(item.id)}
            }>{item.done ? "Не сделано" : "Сделано"}</button>
        </li>)}</ul>
    )
}
}

export default List;