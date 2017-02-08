# react-tags-widget

**Description**

Custom react component to display, add and remove tags.
What component can:
1. Accept array of strings (tags) and onChange callback that returns updated tags
2. Remove tags on backspace and close button, add tags on enter


**Install**

`git clone git@github.com:AdyOS/react-tags-widget.git`
`cd react-tags-widget && npm i`

**Run test version**

1. Run from console `./dev`
2. Go to http://localhost:8081/

**Example**
```
import TagWidget from './js/widgets/TagWidget';

let props = {
    /** Array of tags */
    tags: [
        'asdasdasd', 1, 'asdad123', -1, NaN, {1: 1231231},
        ['1', 2], 'coool', '', '    dsfsdf  ', '  ', 'react'
    ],
    
    /** Title of widget */
    title: 'Test tag widget with react',
    
    /** OnChange callback **/
    onChange: function(values) {
        console.log('new values:', values);
    }
};


new TagWidget(props);

```
