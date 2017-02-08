/**
 * Компонент для добавления нового тага
 * @author aosipov
 * @extends
 */

import React from 'react';

export default class InputTag extends React.Component {
    constructor(props) {
        super(props);
        this.focus = this.focus.bind(this);
    }

    focus() {
        this.textInput.focus();
    }

    clear() {
        this.textInput.value = '';
    }

    render() {
        return <div className="tag tag--input">
            <input ref={(input) => { this.textInput = input; }} type="text" onKeyUp={this.props.handleChange}/>
        </div>
    }
}
