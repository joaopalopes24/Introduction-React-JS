import { Component } from "react";
import './styles.css';

class PostCard extends Component {
    render() {
        const { post } = this.props;

        return (
            <div class="col">
                <div class="card shadow-sm post">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="225" src={post.cover} alt={post.title} />
                    <div class="card-body">
                        <h3>{post.title}</h3>
                        <p class="card-text">{post.body}</p>
                        <div class="d-flex">
                            <small class="text-muted">{post.id}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;