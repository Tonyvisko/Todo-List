import { Input, notification, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { updateUserAPI } from '../services/api.service';
const UpdateUserModal = (props) => {
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;


    useEffect(() => {
        console.log("check dataUpdate props", dataUpdate)
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhật thành công"
            })
            resetAnhCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

        console.log(">>> check state: ", res.data)

    }

    const resetAnhCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullName("");
        setId("");
        setPhone("");
        setDataUpdate(null);
    }
    return (
        <Modal
            title="Update User"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalUpdateOpen}
            onOk={() => handleSubmitBtn()}
            onCancel={() => setIsModalUpdateOpen(false)}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
                <div>
                    <span>Fullname</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>

                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
            </div>
        </Modal>
    )
}
export default UpdateUserModal;