// this help in arranging how the admin dashboard  should look like.
import React from "react"
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, SelectInput,EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <DateField source="date-of-birth" />
            <TextField source="address" />
            <TextField source="roles" />
            <TextField source="phone" />
            <TextField source="company" />
        </Datagrid>
    </List>
);
const PostName = ({ record }) => {
    return <span> {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<PostName />} {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="address" />
            <TextInput source="phone" />
            <TextInput source="company" />
            <DateInput source="date-of-birth" />
            <SelectInput source="roles" choices={[
                { id: 'user', name: 'User' },
                { id: 'admin', name: 'Admin' },
            ]} />

        </SimpleForm>
    </Edit>
);
export const UserCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="address" />
            <TextInput source="phone" />
            <TextInput source="company" />
            <DateInput source="date-of-birth" />
            <SelectInput source="roles" choices={[
                { id: 'user', name: 'User' },
                { id: 'admin', name: 'Admin' },
            ]} />
        </SimpleForm>
    </Create>
);

