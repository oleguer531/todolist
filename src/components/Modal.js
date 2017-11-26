import React from 'react';

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            isActive: false,
        }
    }

    toggleModal() {
        this.setState(state => ({
            isActive: !state.isActive,
        }))
    }

    render() {
        const { title, children, handler } = this.props;

        if (this.state.isActive) {
            return(
                <div className="modal is-active">
                    <div className="modal-background">
                    </div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">{title}</p>
                        <button onClick={this.toggleModal}  className="delete" aria-label="close"></button>
                        </header>  
                        <section className="modal-card-body">
                            {React.cloneElement(children, {
                                onClose: this.toggleModal,
                            })}
                        </section>  
                    </div>        
                </div>    
            )
        } else {
            return React.cloneElement(handler, {
                onClick: this.toggleModal
            })
        }
    }
}

export default Modal;