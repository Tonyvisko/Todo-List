import UserForm from "../user/user.form";
import UserTable from "../user/user.table";
const UserPage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <UserForm />
            <UserTable />
        </div>

    )
}

export default UserPage;