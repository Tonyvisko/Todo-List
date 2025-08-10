import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../services/api.service';

const UserTable = (props) => {
    const { dataUsers, loadUser } = props;
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);


    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <a className='_id'
                    onClick={() => {
                        setDataDetail(record);
                        setIsDetailOpen(true);
                    }}>
                    {record._id}
                </a>
            ),
        },
        {
            title: 'Full name',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{ cursor: "pointer", color: "blue" }} />
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => { handleDeleteUSer(record._id) }}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>

                </div>
            ),
        },

    ];
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];
    const handleDeleteUSer = async (id) => {
        const res = await deleteUserAPI(id);
        if (res.data) {
            notification.success({
                message: "Delete user",
                description: "Xóa user thành công"
            })
            await loadUser();
        } else {
            notification.error({
                message: "Error delete user",
                description: JSON.stringify(res.message)
            })
        }

        console.log(">>> check state: ", res.data)

    }
    return (
        <>
            <Table columns={columns}
                dataSource={dataUsers}
                rowKey={"_id"}
            />
            <UpdateUserModal
                loadUser={loadUser}
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}

            />
            <ViewUserDetail
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isDetailOpen={isDetailOpen}
                setIsDetailOpen={setIsDetailOpen}

            />
        </>

    )
}

export default UserTable;