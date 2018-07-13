/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Panel from './components/panel';
import registerServiceWorker from './registerServiceWorker';

window.$.ajax('../data/taskModel.json').then((data) => {
    var task = data;
    task.element = window.$("#example");
    renderPicker(task);
});

function renderPicker(task) {
    ReactDOM.render(
        <Panel model={task} showAssigneeButton={true} />, 
        document.getElementById('root')
    );
    registerServiceWorker();
}

