import React from 'react'
import {connect} from 'react-redux'

import {addTodo} from '../actions.js';

class AddTodo extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInputChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    onSubmit(ev) {
        ev.preventDefault()

        const inputValue = this.state.value
        if (!inputValue.trim()) {
            return
        }
        this.props.onAdd(inputValue)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className='new-todo' value={this.state.value} onChange={this.onInputChange} />
                    <button className="add-btn" type='submit'>
                        添加
                    </button>
                </form>
            </div>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)