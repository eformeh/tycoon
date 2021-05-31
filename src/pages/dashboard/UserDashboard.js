import React from 'react';
import { JsonToTable } from "react-json-to-table";
import Account_Statement from '../../db.json'
import { FormatTableRows } from "dashboard-widgets";
import { UserList } from "../../components/dashboard/user";
function UserDashboard() {
    return (
        <div className="tb">
           <JsonToTable json={Account_Statement} />
        </div>
    )
}

export default UserDashboard