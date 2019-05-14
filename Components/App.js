import React from 'react';
import UserList from '../Containers/user-list';
import UserDetail from '../Containers/user-detail';

const App=()=>(
    <div>
        <h2>Username List:</h2>
        <UserList/>
        <hr/>
        <h2>User details:</h2>
        <UserDetail/>
    </div>
)

export default App;

