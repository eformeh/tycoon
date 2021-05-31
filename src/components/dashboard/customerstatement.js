import React from "react"
import { List, Datagrid, Edit, Create, SimpleForm, DateField, TextField, EditButton, TextInput, DateInput, SelectInput, EmailField } from 'react-admin';

export const CustomerStatement = props => (
    <List {...props}>
        <Datagrid>
            <TextField name="Customer ID" source="Statement_Header.Customer_Id" />
            <TextField name="Account Number" source="Statement_Header.Account" />
            <TextField name="Customer Name" source="Statement_Header.Customer_Name" />
            <TextField source="Statement_Header.Currency" />
            <TextField name="Opening Balance" source="Statement_Header.Opening_Balance" />
            <TextField name="Closing Balance" source="Statement_Header.Closing_Balance" />

        </Datagrid>
    </List>
);