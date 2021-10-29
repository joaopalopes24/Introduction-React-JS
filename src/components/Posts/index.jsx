import { Component } from "react";
import PostCard from "../PostCard";

class Posts extends Component {
    render() {
        const { posts } = this.props;

        return (
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        )
    }
}

export default Posts;