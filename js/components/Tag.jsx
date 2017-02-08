/**
 * Компонент тега
 *
 * @author aosipov
 * @extends React.Component
 */

import React from 'react';

export default class Tag extends React.Component {
    render() {
        return (
            <div className="tag">
                <span className="tag__text">{this.props.name}</span>
                <span className="tag__close" onClick={this.props.deleteTag}>&times;</span>
            </div>
        );
    }
}
