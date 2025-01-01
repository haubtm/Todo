import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {
    const { isModalDetailOpen, setIsModalDetailOpen, dataDetail, setDataDetail, loadUser } = props;

    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleOnChangeFile = (event) => {
        if (!event.target.files || event.target.files.length == 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }

        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    const handleUpdateUserAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar");
        if (resUpload.data) {
            const newAvatar = resUpload.data.fileName;
            const resUpdateAvatar = await updateUserAvatarAPI(dataDetail.id, newAvatar, dataDetail.fullName, dataDetail.email, dataDetail.phone);
            if (resUpdateAvatar.data) {
                setIsModalDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();
                notification.success({
                    message: "Update avatar successfully",
                    description: "Update avatar successfully"
                })
            } else {
                notification.error({
                    message: "Update avatar failed",
                    description: JSON.stringify(resUpdateAvatar.message)
                })
            }
        } else {
            notification.error({
                message: "Upload avatar failed",
                description: JSON.stringify(resUpload.message)
            })
        }
        console.log(resUpload.data.fileName);
    }

    return (
        <Drawer
            width={"40vw"}
            title="Detail User"
            open={isModalDetailOpen}
            onClose={() => {
                setDataDetail(null);
                setIsModalDetailOpen(false);
            }}
        >
            {dataDetail ?
                <>
                    <p>Id: {dataDetail.id}</p>
                    <br />
                    <p>Full Name: {dataDetail.fullName}</p>
                    <br />
                    <p>Email: {dataDetail.email}</p>
                    <br />
                    <p>Phone number: {dataDetail.phone}</p>
                    <br />
                    <p>Avatar:</p>
                    <div style={{
                        marginTop: "10px",
                        height: "100px", width: "150px",
                        border: "1px solid #ccc",
                    }}>
                        <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={`${import.meta.env.VITE_BACKEND_URL}/storage/avatar/${dataDetail.avatar}`} alt="" />
                    </div>
                    <div>
                        <label htmlFor="btnUpload" style={{
                            display: "block",
                            width: "fit-content",
                            marginTop: "15px",
                            padding: "5px 10px",
                            background: "orange",
                            borderRadius: "5px",
                            cursor: "pointer"
                        }}>
                            Upload Avatar
                        </label>
                        <input type="file" hidden id="btnUpload"
                            onChange={(event) => handleOnChangeFile(event)} />
                    </div>
                    {preview &&
                        <>
                            <div style={{
                                marginTop: "10px",
                                height: "100px", width: "150px",
                                marginBottom: "15px",
                            }}>
                                <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                                    src={preview} alt="" />
                            </div>
                            <Button
                                onClick={() => handleUpdateUserAvatar()}
                                type="primary">Upload</Button>
                        </>
                    }
                </>
                :
                <>
                    <p>No data</p>
                </>}
        </Drawer>
    )
}

export default ViewUserDetail;