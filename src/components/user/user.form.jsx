import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "Create user successfully",
                description: "Create user successfully"
            })
        } else {
            notification.error({
                message: "Create user failed",
                description: JSON.stringify(res.error)
            })
        }
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <span>FullName</span>
                    <Input value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div>
                    <Button onClick={handleClickBtn} type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;