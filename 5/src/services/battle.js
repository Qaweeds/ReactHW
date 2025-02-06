import axios from "axios";

const API = `https://api.github.com/users`;

const routes = {
    user: (username) => axios(API + `/${username}`).then(({data}) => data),
    userRepos: (username) => axios(API + `/${username}/repos?per_page=100`).then(({data}) => data),
};

export default routes;