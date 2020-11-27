import AsyncStorage from "@react-native-community/async-storage"; 

export const getToken = async () => {
    return await AsyncStorage.getItem("token");
}

export const setToken = async (token) => {
    return await AsyncStorage.setItem("token", token);
}

export const removeToken = async () => {
    return await AsyncStorage.removeItem("token");
}

// User
export const getUserInfo = async () => {
    return await AsyncStorage.getItem("user");
}

export const setUserInfo = async (user) => {
    return await AsyncStorage.setItem("user", user);
}

export const removeUserInfo = async () => {
    return await AsyncStorage.removeItem("user");
}