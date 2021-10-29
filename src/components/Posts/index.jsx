import { Component } from "react";
import PostCard from "../PostCard";

class Posts extends Component {
    render() {
        const { posts } = this.props;

        return (
            <div className="posts">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        )
    }
}

export default Posts;