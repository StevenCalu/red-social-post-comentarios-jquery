function addComment(postId, commentText) {
    const post = posts.find(post => post.id === postId);
    if (post) {
        post.comments.push(commentText);
        renderPosts();
    }
}

function editComment(postId, commentIndex, newCommentText) {
    const post = posts.find(post => post.id === postId);
    if (post && post.comments[commentIndex] !== undefined) {
        post.comments[commentIndex] = newCommentText;
        renderPosts();
    }
}

function deleteComment(postId, commentIndex) {
    const post = posts.find(post => post.id === postId);
    if (post && post.comments[commentIndex] !== undefined) {
        post.comments.splice(commentIndex, 1);
        renderPosts();
    }
}

function renderComment(postId, index, comment) {
    return `
        <div class="comment" data-index="${index}">
            <span>${comment}</span>
            <button class="editComment">Editar</button>
            <button class="deleteComment">Eliminar</button>
        </div>
    `;
}
