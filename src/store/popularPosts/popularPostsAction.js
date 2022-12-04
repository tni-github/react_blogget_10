import { URL_API } from '../../api/const';
import axios from 'axios';
import { deleteToken } from '../tokenReducer';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (popularPosts) => ({
  type: POSTS_REQUEST_SUCCESS,
  popularPosts,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
  popularPosts: [],
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(postsRequest());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => {
      dispatch(postsRequestSuccess(data.data.children));
    })
    .catch((err) => {
      console.error(err);
      dispatch(deleteToken());
      dispatch(postsRequestError(err.toString()));
    });
};
