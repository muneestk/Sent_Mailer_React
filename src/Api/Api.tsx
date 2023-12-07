import axios from "axios";

const userApi = axios.create({
    baseURL: 'http://localhost:3001'
});

export const formSubmit = async (formData: unknown) => {
    try {
        console.log(formData,'userapi')
        return await userApi.post('/sendMail', formData);
    } catch (error) {
        console.log(error);
    }
};



export const companyDetails = async () => {
    try {
        console.log(' company userapi')
        return await userApi.get('/mailList');
    } catch (error) {
        console.log(error);
    }
};
