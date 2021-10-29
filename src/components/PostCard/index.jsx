import { Component } from "react";

class PostCard extends Component {
    render() {
        const { post } = this.props;

        return (
            <div className="post">
                <img src={post.cover} alt={post.title} />
                <div className="post-content">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default PostCard;