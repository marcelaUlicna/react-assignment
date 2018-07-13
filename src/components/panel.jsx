import React from 'react';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            taskPanel: this.props.taskAssigneePanel || false,
            assigneeOptions: this.props.model.assigneeOptions
        };
    }

    togglePanel() {
        this.setState((prev, props) => prev.taskPanel = !prev.taskPanel);
    }

    render() {
        let innerPanel = null;
        if(this.props.showAssigneeButton) {
            innerPanel = (
                <div>
                    <SwitchPanelWrapper 
                        model={this.props.model} 
                        taskAssigneePanel={this.state.taskPanel} 
                        toggleTaskPanel={this.togglePanel.bind(this)} />
                    <TaskAssignmentWrapper 
                        model={this.props.model} 
                        taskAssigneePanel={this.state.taskPanel} 
                        toggleTaskPanel={this.togglePanel.bind(this)} />
                </div>
            );
        } else {
            innerPanel = (
                <div className="row">
                    <div className="col-md-12">
                        <p>SwitchPanel</p>
                    </div>
                </div>
            );
        }
        
        return (
            <div className="assignee-component">
                <h4><strong>{this.props.model.title}</strong></h4>
                {innerPanel}
            </div>
        );
    }
}

class SwitchPanelWrapper extends React.Component {
    get sectionStyle() {
        return this.props.taskAssigneePanel ? { "display": "none"} : { "display": "block" };
    }

    constructor(props) {
        super(props);
        
        this.state = { 
            taskPanel: this.props.taskAssigneePanel || false,
            assigneeOptions: this.props.model.assigneeOptions,
            disable: false
        };

        this.handleDisableButton = this.handleDisableButton.bind(this);
    }

    handleDisableButton(disable) {
        this.setState({disable: disable});
    }

    render() {
        return (
            <div className="row" style={this.sectionStyle}>
                    <div className="col-md-9">
                        <p>SwitchPanel</p>
                    </div>
                    <div className="col-md-3">
                        <input 
                            type="button" 
                            className="btn btn-primary show-assignee-button" 
                            value="Show task assignees"
                            onClick={this.props.toggleTaskPanel}
                            disabled={this.state.disable} />
                    </div>
                </div>
        );
    }
}

class TaskAssignmentWrapper extends React.Component {
    render() {
        if (this.props.taskAssigneePanel) {
            return (
                <div>
                    <div className="pull-right">
                        <button type="button" className="btn btn-default btn-sm cancel-button" onClick={this.props.toggleTaskPanel}>Cancel</button>
                    </div>
                    <p>TaskAssigneeWrapper</p>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Panel