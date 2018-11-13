import axios from 'axios';
import * as types from './actionTypes';

const apiUrl = process.env.REACT_APP_API_URL;

export const getArticles = () => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/api/articles/feed/1`);
    dispatch({
      type: types.GET_ARTICLES,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_ARTICLES_ERROR,
      payload: error,
    });
  }
};

export default getArticles;
