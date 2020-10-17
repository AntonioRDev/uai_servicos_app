import AsyncStorage from "@react-native-community/async-storage"; 

export const getToken = async () => {
    return await AsyncStorage.getItem("token");
}