import React from 'react';
import List from './List';

class App extends React.Component{
    constructor(props){
        super(props);
        this.addNew = this.addNew.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.removing = this.removing.bind(this);
        this.done = this.done.bind(this);
        this.state = {
            list: []
        }
    }
    deleteList(){
        this.setState(state =>({
            list: []
        }))
    }
    addNew(){
        const newElement = document
            .getElementById("newElement").value;

        this.setState(state => ({
            list: this.state.list.concat([{
                id: + new Date(),
                message: newElement,
                done:false,
            }])
        }))
    }
    removing(id) {
        const newList = this.state.list
            .filter(item => item.id != id);

        this.setState({
            list: newList,
        })
    }
    done(id) {
        const newList = this.state.list
            .map(item => {
                if (item.id == id) {
                    return Object.assign({}, item, {
                        done: !item.done
                    });
                } else {
                    return item
                }
            });

        this.setState({
            list: newList,
        })
    }
    render(){
        return(
            <div>
                <h1>Message</h1>
                <List 
                    onRemove={this.removing} 
                    list={this.state.list}
                    onDone={this.done}
                />
                <input id="newElement" type="text" placeholder="Введите текст" />
                <button onClick={this.addNew}>Добавить</button>
                <button onClick={this.deleteList}>Очистить</button>
            </div>
        );
    }
}

export default App;