import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const Url = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(Url, data)
}

const updateUserAPI = (id, fullName, phone) => {
    const Url = `/api/v1/user`;
    const data = {
        id: id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(Url, data)
}

const deleteUserAPI = (id) => {
    const Url = `/api/v1/user/${id}`;
    return axios.delete(Url)
}

const fetchAllUserAPI = () => {
    const Url = "/api/v1/user";
    return axios.get(Url)
}

const handleUploadFile = (file, folder) => {
    const Url = "/api/v1/files";
    let config = {
        headers: {
            // "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }

    const data = new FormData();
    data.append("file", file);
    data.append("folder", folder);

    return axios.post(Url, data, config)
}

const updateUserAvatarAPI = (id, avatar, fullName, email, phone) => {
    const Url = `/api/v1/user`;
    const data = {
        id: id,
        avatar: avatar,
        fullName: fullName,
        email: email,
        phone: phone
    }
    return axios.put(Url, data)
}

export {
    createUserAPI, fetchAllUserAPI, updateUserAPI,
    deleteUserAPI, handleUploadFile, updateUserAvatarAPI
}