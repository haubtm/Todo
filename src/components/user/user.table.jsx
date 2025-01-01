import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import UpdateUserModal from "./update.user.model";
import { useState } from "react";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";

const UserTable = (props) => {
    const { dataUsers } = props;

    const { loadUser } = props;

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);

    const [dataDetail, setDataDetail] = useState(null);

    const handleDeleteUser = async (id) => {
        const res = await deleteUserAPI(id);
        // if (res.data) {
        notification.success({
            message: "Delete user successfully",
            description: "Delete user successfully"
        })
        await loadUser();
        // } else {
        //     notification.error({
        //         message: "Delete user failed",
        //         description: JSON.stringify(res.message)
        //     })
        // }
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            render: (_, record) => {
                return (
                    <a
                        onClick={() => {
                            setIsModalDetailOpen(true);
                            setDataDetail(record)
                        }}
                    >{record.id}</a>
                )
            }
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
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return (
                    <div style={{ display: "flex", gap: "20px" }}>
                        <EditOutlined
                            onClick={() => {
                                setDataUpdate(record);
                                setIsModalUpdateOpen(true);
                            }}
                            style={{ cursor: "pointer", color: "orange" }} />
                        <Popconfirm
                            title="Delete this user?"
                            description="Are you sure to delete this user?"
                            onConfirm={() => handleDeleteUser(record.id)}
                            okText="Yes"
                            cancelText="No"
                            placement="left"
                        >
                            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                        </Popconfirm>

                    </div>
                )
            }
        }
    ];

    return (
        <>
            <Table dataSource={dataUsers} columns={columns} rowKey={"id"} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />
            <ViewUserDetail
                isModalDetailOpen={isModalDetailOpen}
                setIsModalDetailOpen={setIsModalDetailOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />
        </>
    )
}

export default UserTable;