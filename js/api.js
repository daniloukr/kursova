export const getWeatherData=async(city) =>{
    //9cd51377d28330e578efb754f63a6556
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}?lat={lat}&lon={lon}&appid=9cd51377d28330e578efb754f63a6556&lang=ru`);
            return await response.json();

    } catch (error) {
        console.error(error);
    }
}
