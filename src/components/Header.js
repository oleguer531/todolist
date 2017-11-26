import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
         <nav className="navbar">
             <div className="navbar-brand">
                 <a className="navbar-item" href="#">
                    <i className="fa fa-tasks fa-3x header_logo" aria-hidden="true">
                        
                    </i>
                    
                 </a>
                 <a className="navbar-item" href="#">
                    <h1 className="header_logo is-size-4 ">ToDo List</h1>
                    </a>
                 <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span>Регистрация</span>
                    <span>Что Нового?</span>
                    <span>Новая Задача</span>
                </div>    
             </div> 
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                        <p className="control">
                                <a className="button">Login</a>
                            </p>  
                            <p className="control">
                                <a className="button is-success">Create</a>
                            </p> 
                            <p className="control">
                                <a className="button is-success">Registration</a>
                            </p>   
                        </div>    
                    </div>    
                </div>         
         </nav>    
        );
    }
}






export default Header;