import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receiceAllPosts = posts => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts: posts
  }
}

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post: post
  }
}

export const removePost = post => {
  return {
    type: REMOVE_POST,
    postId: post.id
  }
}

export const receivePostErrors = errors => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors: errors
  }
}

export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchAllPosts().then(
    (posts) => dispatch(receiceAllPosts(posts)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const fetchUserPosts = (id) => dispatch => {
  return PostAPIUtil.fetchUserPosts(id).then(
    (posts) => dispatch(receiceAllPosts(posts)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const fetchPost = (id) => dispatch => {
  return PostAPIUtil.fetchPost(id).then(
    (post) => dispatch(receicePost(post)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const createPost = (post) => dispatch => {
  return PostAPIUtil.createPost(post).then(
    (post) => dispatch(receivePost(post)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const updatePost = (post) => dispatch => {
  return PostAPIUtil.updatePost(post).then(
    (post) => dispatch(receivePost(post)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const deletePost = (id) => dispatch => {
  return PostAPIUtil.deletePost(id).then(
    (id) => dispatch(removePost(id)),
    (error) => dispatch(receivePostErrors(error.responseJSON)) 
  )
}

export const removeErrors = () => dispatch => {
  return dispatch(receivePostErrors([]))
}