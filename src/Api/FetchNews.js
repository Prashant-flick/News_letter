import axios from './axios'

const fetchNews = async(url) => {
    try {
        const data = await axios.get(`${url}`)
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}

export {
    fetchNews
}