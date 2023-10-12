// example.js
// const axios = require('axios');
import axios from "axios";


const API = axios.create({ baseURL: 'http://localhost:5000' }); 

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;        
    }
    return req;
});

// console.log("API working INITIALIZED:");

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags }`);
// Why tags is used in search
export const createPost = ( newPost ) => API.post('/posts', newPost);
export const updatePost = ( idTest, updatedPost ) => API.patch(`/posts/${idTest}`, updatedPost);
export const deletePost = ( id ) => API.delete(`/posts/${id}`);
export const likePost = ( id ) => API.patch(`/posts/${id}/likePost`);
export const comment = ( value, id ) => API.post(`/posts/${id}/commentPost`, {value});
// console.log("API working: ");

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

// Chats
export const fetchChats = ( id ) => API.get(`/api/chats/${id}`);
