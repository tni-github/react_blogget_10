import {
  POSTS_REQUEST,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_ERROR,
} from './popularPostsAction';

const initialState = {
  postLoading: '',
  popularPosts: [],
  error: '',
};

export const popularPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        postLoading: 'loading',
        error: '',
      };

    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        postLoading: 'loaded',
        popularPosts: action.popularPosts,
        error: '',
      };

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        postLoading: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};
