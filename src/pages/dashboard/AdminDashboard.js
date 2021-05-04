import React from 'react'
import { Admin, Resource} from 'react-admin';
//import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, theme } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
//import authProvider from '../login/authProvider';
import { UserList,UserEdit,UserCreate } from "../../components/dashboard/user";

const AdminDashboard = () => <Admin
//authProvider={authProvider}
    dataProvider={jsonServerProvider(
        'https://my-json-server.typicode.com/eformeh/myjsonserver'
  
    )
    }
    theme="dark"
>
    <Resource name="user"
        list={UserList}
        edit={UserEdit}
        create={UserCreate} />
</Admin>
{/* <Admin
        dataProvider={jsonServerProvider(
            'https://jsonplaceholder.typicode.com'
        )}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        <Resource
            name="posts"
            icon={PostIcon}
            list={PostList}
            edit={PostEdit}
            create={PostCreate}
            show={PostShow}
        />
        <Resource name="users" icon={UserIcon} list={UserList} />
        <Resource name="comments" list={ListGuesser} />
    </Admin> */}

export default AdminDashboard
