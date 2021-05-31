import React from "react"
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, SelectInput,EmailField } from 'react-admin';

export const AccountShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
        <TextField source="Customer_Id" />
            <TextField source="Account" />
            <TextField source="Customer_Name" />
            <TextField source="Currency" />
            <TextField source="Opening_Balance" />
            <TextField source="Closing_Balance" />
            
        </SimpleShowLayout>
    </Show>
    )
