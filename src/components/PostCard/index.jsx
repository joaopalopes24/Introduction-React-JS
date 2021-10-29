import { Component } from "react";
import './styles.css';

class PostCard extends Component {
    render() {
        const { post } = this.props;

        return (
            <div className="post">
                <img src={post.cover} alt={post.title} />
                <div className="post-content">
                    <h1>{post.id} - {post.title}</h1>
                    <p>{post.body}</p>
                    <br></br>
                </div>
            </div>
        )
    }
}

export default PostCard;