import React from 'react';
import './modal.css';

export class Modal extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show && nextProps.children !== this.props.children
    }

    render() {
        console.log(this.props)
        return (
            <div
                className="modal"
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
             </div>
        )
    }
}