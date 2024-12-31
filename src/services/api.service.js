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

const fetchAllUserAPI = () => {
    const Url = "/api/v1/user";
    return axios.get(Url)
}

export {
    createUserAPI, fetchAllUserAPI
}