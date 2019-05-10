import React from 'react';
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    // debugger
    const posts = this.props.posts;
    const likes = this.props.likes;
    const currentUser = this.props.currentUser;

    return (
      <div className="post-container">
        {   
          posts.map((post) => {
            return <PostIndexItem 
            currentUser={currentUser}
            post={post}
            likes={likes}
            createComment={this.props.createComment} 
            deleteComment={this.props.deleteComment} 
            createLike={this.props.createLike} 
            deleteLike={this.props.deleteLike} 
            fetchLikes={this.props.fetchLikes}
            key={post.id} />
          })       
        }
      </div>
    )
  }
}

export default PostIndex;