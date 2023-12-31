import axios from "axios";

const userApi = axios.create({
    baseURL: 'https://mailsenter.onrender.com'
});

export const formSubmit = async (formData: unknown) => {
    try {
        console.log(formData,'userapi')
        return await userApi.post('/sendMail', formData);
    } catch (error) {
        console.log(error);
    }
};



export const companyDetails = async (search?:string) => {
    try {
        return await userApi.get(`/mailList?search=${search}`);
    } catch (error) {
        console.log(error);
    }
};
