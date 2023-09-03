import axios from 'axios'

const API_ENDPOINT = "https://sop-tool-backend.vercel.app/";

export const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;

    return re.test(email);
};

export const checkFormData = (formData) => {
    let isAllDataSubmitted = false;
    for (let item of Object.values(formData)) {
        if (item?.value?.length > 0 || item?.value > 0) {
            isAllDataSubmitted = true;
        }
        else {
            isAllDataSubmitted = false;
            break;
        }
    }
    return isAllDataSubmitted;
}

export const sendEmail = async (formData) => {
    try{
        const result = await axios.post(`${API_ENDPOINT}api/email`,formData);
        return result?.data?.messageId
    }
    catch(e){
        console.log("Error in sending email",e.message)
    }

}
