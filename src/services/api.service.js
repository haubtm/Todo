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

export {
    createUserAPI, fetchAllUserAPI, updateUserAPI, deleteUserAPI
}