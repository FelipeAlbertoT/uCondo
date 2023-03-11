import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeChartAccounts = async (chartAccounts) => {
    try {
        await AsyncStorage.setItem('chartAccounts', JSON.stringify(chartAccounts));
    } catch (error) {
        console.warn(error)
    }
}

export default fetchChartAccounts = async () => {
    try {
        const value = await AsyncStorage.getItem('chartAccounts');
        if (value !== null) {
            return JSON.parse(value)
        }
    } catch (error) {
        console.warn(error)
    }
}
