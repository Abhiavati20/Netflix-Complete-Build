import axios from 'axios';
//f81980ff410e46f422d64ddf3a56dddd
const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
export default instance;