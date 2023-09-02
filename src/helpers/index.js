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
