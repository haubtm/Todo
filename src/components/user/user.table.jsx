import { Table } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useState } from "react";

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
    ];

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        if (res.data) {
            setDataUsers(res.data)
        }
    }


    return (
        <Table dataSource={dataUsers} columns={columns} />
    )
}

export default UserTable;