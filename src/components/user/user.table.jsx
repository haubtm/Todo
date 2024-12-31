import { Table } from "antd";

const UserTable = (props) => {
    const { dataUsers } = props;

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




    return (
        <Table dataSource={dataUsers} columns={columns} rowKey={"id"} />
    )
}

export default UserTable;