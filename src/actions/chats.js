import { FETCH_CHATS } from '../constants/actionTypes';
import * as api from '../api';

// Action creators

export const getChats = (id) => async (dispatch) => {
    try {
        // dispatch({ type : START_LOADING });
        const { data } = await api.fetchChats(id);
        // console.log(data);
        
        // dispatch({ type : FETCH_CHATS, payload : data })
        // dispatch({ type : END_LOADING });
    } catch (error) {
        console.log(error);
    }
}