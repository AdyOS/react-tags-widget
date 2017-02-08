/**
 * Список тегов
 *
 * @author aosipov
 * @extends React.Component
 */

import React from 'react';
import Tag from './Tag.jsx'
import InputTag from './InputTag.jsx'

export default class TagList extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
        this.focus = this.focus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getInitialState() {
        return {
            tags: [],
            title: 'Default title'
        }
    }

    focus() {
        this.textInput.focus();
    }

    componentDidMount() {
        let {tags = [], title} = this.props;
        this.setState({tags, title});
    }


    render() {
        let list = this.state.tags;
        let tags = list.map((name, i) => {
            return (<Tag id={i} key={i} name={name} deleteTag={() => this.deleteTag(i)}/>);
        });
        let editableTag = (
            <InputTag
                ref={(input) => { this.textInput = input; }}
                handleChange={this.handleChange}/>
        );

        return (
            <div className="react-tag-widget">
                <h3>{this.props.title}</h3>
                <div className="tag-list" onClick={this.focus}>{tags} {editableTag}</div>
            </div>
        );
    }

    deleteTag(idx) {
        this.state.tags.splice(idx, 1);
        this.setState({tags: this.state.tags});
        this.props.onChange(this.state.tags);
    }

    addTag(tagText) {
        if (tagText && !tagText.length) {
            return;
        }

        let tags = this.state.tags.slice();
        tags.push(tagText);
        this.clearInput();
        this.setState({tags});
        this.props.onChange(tags);
    }

    clearInput() {
        this.textInput.clear();
    }

    handleChange(e) {
        if (!e) {
            return;
        }

        if (e.keyCode === 13) {
            // pressed enter
            this.addTag(e.currentTarget.value);
        } else if (e.keyCode === 8 && !e.currentTarget.value.length) {
            // pressed backspace
            this.deleteTag(this.state.tags.length - 1);
        }
    }
}

TagList.propTypes = {
    tags: React.PropTypes.array,
    title: React.PropTypes.string,
    onChange: React.PropTypes.func
};
