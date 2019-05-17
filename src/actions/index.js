import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch,getState) => {
  //with help of thunk we dispatch send func and thunk fix that
  await dispatch(fetchPosts());
  // const userId = _.uniq(_.map(getState().posts ,'userId'));
  // userId.forEach(id => dispatch(fetchUser(id)));
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value(); //value is executer
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get('/posts');
  dispatch({type : 'FETCH_POSTS', payload : response.data}); 
};

//lodash for memoize to not have over fetch
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({type : 'FETCH_USER', payload : response.data}); 
};
