/**
 * Виджет для работы с тегами
 *
 * @author aosipov
 * @class
 */

import TagList from '../components/TagList.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import css from '../../css/tag.less';
import {isString} from '../helpers/helper';

export default class TagWidget {
    constructor({tags = [], title = '', onChange, elementId='tags'}) {
        this.props = {tags, title, onChange};
        this.elementId = elementId;
        this.validateTags();
        this.createElementIfNotExist();
        this.createComponent();
    }

    /**
     * Валидация входных параметров, нужны только стринги
     */
    validateTags() {
        this.props.tags = this.props.tags.filter((name) => {
            if (isString(name)) {
                name = name.trim();
                return name.length;
            }
        })
    }

    /**
     * Проверит наличие DOM элемента, и если его нет - создаст
     */
    createElementIfNotExist() {
        if (!document.getElementById(this.elementId)) {
            let el = document.createElement('div');
            el.setAttribute('id', this.elementId);
            document.body.appendChild(el);
        }
    }

    /**
     * Создаем компоненту
     */
    createComponent() {
        ReactDOM.render(<TagList {...this.props}/>, document.getElementById(this.elementId));
    }
}
