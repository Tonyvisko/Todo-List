import UserForm from "../user/user.form";
import UserTable from "../user/user.table";
import { fetchAllUserAPI } from '../services/api.service';
import { useEffect, useState } from 'react';
const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);

    useEffect(() => {
        console.log(">>> run 111")
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)

    }
    return (
        <div style={{ padding: "20px " }}>
            <UserForm loadUser={loadUser} />
            <UserTable
                dataUsers={dataUsers}
                loadUser={loadUser} />
        </div>

    )
}

export default UserPage;