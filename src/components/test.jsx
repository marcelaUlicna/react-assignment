import React from 'react';

export class Test extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }
    
    loadUsers() {
        const url = "../data/users.json";

        window.$.ajax(url).then(results => {
            this.setState({users: results.items});
        });
    }

    componentWillMount() {
        this.loadUsers();
    }

    componentDidMount() {
        window.$("#user-select-2").select2({
            "placeholder": "Select a user"
        });
    }
    
    render() {
        let users = this.state.users;
        
        return (<div>
            <h3>Test component</h3>
            <p>User count: {users.length}</p>
            <select id="user-select-2" style={{width: 200}}>
                {users.map(item => <option key={item.id} value={item.id}>{item.text}</option>)}
            </select>
        </div>);
    }
}