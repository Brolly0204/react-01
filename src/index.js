// import React from 'react';
// import ReactDOM from 'react-dom';

// let element = <div>
//     <h3>hello react!</h3>
// </div>;

class ReactElement {
    constructor(type, props) {
        this.type = type;
        this.props = props;
    }
}

let React = {
    createElement(type, props = {}, childrens) {
        let children = childrens;
        if (childrens in Array) {
            children = childrens.length === 1 ? childrens[0] : childrens;
        }
        return new ReactElement(type, {...props, children});
    }
}

let ReactDOM = {
    render(eleObject, container) {
        let {type, props} = eleObject;
        let elementNode = document.createElement(type);
        for (let key in props) {
            if (key === 'children') {
                if (typeof props[key] === 'object') {
                    props[key].forEach(item => {
                        ReactDOM.render(item, elementNode);
                    });
                } else {
                    elementNode.appendChild(document.createTextNode(props[key]))
                }
            } else if (key === 'className') {
                elementNode.setAttribute('class', props[key]);
            } else {
                elementNode.setAttribute(key, props[key]);
            }
        }
        container.appendChild(elementNode);
    }
}

// ReactDOM.render(
//     React.createElement('h3', {id: 'h3'}, [
//         React.createElement('span', {id: 'span'}, 'hello react!'),
//         React.createElement('span', {id: 'span'}, 'hello vue!'),
//     ]),
//     document.getElementById('root')
// );

ReactDOM.render(
    React.createElement('h3', {id: 'h3'}, 'hello react!'),
    document.getElementById('root')
);