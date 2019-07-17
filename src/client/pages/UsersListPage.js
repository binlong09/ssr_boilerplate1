import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersListPage extends Component {
    componentDidMount() {
        // this is mandatory because user can navigate to another page, navigate back
        // and nothing would be displayed because loadData is not invoked
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

function mapStatesToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    // calling actions manually to fill data in the store
    return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStatesToProps, { fetchUsers })(UsersListPage),
    loadData
}