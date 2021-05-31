import React from 'react'
import { Admin, Resource } from 'react-admin';
//import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, theme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from '../login/authProvider';
import Login from '../login/login';
import { UserList, UserEdit, UserCreate } from "../../components/dashboard/user";
import Theme from "../../components/dashboard/theme";
const AdminDashboard = () => <Admin
    AuthProvider={authProvider}
    //  loginPage={Login}
    dataProvider={jsonServerProvider(
        'https://my-json-server.typicode.com/eformeh/myjsonserver',
        // 'https://my-json-server.typicode.com/eformeh/customerstatement'
    )
    }
    theme={Theme}

>
    <Resource name="user"
        list={UserList}
        edit={UserEdit}
        create={UserCreate} />
<<<<<<< Updated upstream
    <Resource name="account statement"/>
</Admin>
=======

    <Resource name="Account_Statement" show={Account_Statement}>
        return(
        <div>
            <JsonToTable json={Account_Statement} />
        </div>
        )
    </Resource>


</Admin>


>>>>>>> Stashed changes
export default AdminDashboard
