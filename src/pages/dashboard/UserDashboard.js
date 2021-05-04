import React from 'react';
import { FormatTableRows } from "dashboard-widgets";
import { UserList } from "../../components/dashboard/user";
function UserDashboard() {
    return (
        <div>
            <table className="table bigText">
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
                <FormatTableRows data={[
                    ["1", "a", 1.0],
                    [2, "b", 2.0]
                ]}
                    formatRule={(cell) => typeof cell == "number" ? "displayRed" : ""}
                    formatRuleRow={(row) => typeof row[0] == "number" ? "displayGreen" : ""}
                />
            </table>
        </div>
    )
}

export default UserDashboard