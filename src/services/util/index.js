import validator from "validator";
import Toast from 'react-native-toast-message';

export const isEmail = (email) => {
    return validator.isEmail(email);
};

export const showToast = (type = "success", title, text, position = "top") => {
    Toast.show({
        type: type,
        text1: title,
        text2: text,
        position: position
    });
}

export const checkPhone = (phone) => {
    return validator.isMobilePhone(phone, "pt-BR");
}