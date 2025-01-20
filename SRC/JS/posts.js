const posts = [];

function addPost(title, description) {
    const newPost = {
        id: Date.now(),
        title,
        description,
        date: new Date().toLocaleString(),
        comments: []
    };
    posts.push(newPost);
    renderPosts();
}

function filterPosts(keyword) {
    const filtered = posts.filter(post => post.title.toLowerCase().includes(keyword.toLowerCase()));
    renderPosts(filtered);
}

function renderPost(post) {
    return `
        <div class="post" data-id="${post.id}">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <small>Creado: ${post.date}</small>
            <button class="addComment">Agregar Comentario</button>
            <button class="editPost">Editar Post</button>
            <button class="deletePost">Eliminar Post</button>
            <div class="comments"></div>
        </div>
    `;
}

function renderPosts(filteredPosts = posts) {
    const container = $('#postsContainer');
    container.empty();

    filteredPosts.forEach(post => {
        const postElement = $(renderPost(post));
        const commentsContainer = postElement.find('.comments');
        post.comments.forEach((comment, index) => {
            commentsContainer.append(renderComment(post.id, index, comment));
        });

        container.append(postElement);
    });
}
