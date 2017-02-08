import TagWidget from './js/widgets/TagWidget';

let props = {
    tags: [
        'asdasdasd', 1, 'asdad123', -1, NaN, {1: 1231231},
        ['1', 2], 'coool', '', '    dsfsdf  ', '  ', 'react'
    ],
    title: 'Test tag widget with react',
    onChange: function(values) {
        console.log('new values:', values);
    }
};


new TagWidget(props);
