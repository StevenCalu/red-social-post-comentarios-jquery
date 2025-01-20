$(document).ready(function () {
    $('#postForm').on('submit', function (e) {
        e.preventDefault();
        const title = $('#postTitle').val();
        const description = $('#postDescription').val();
        addPost(title, description);
        $(this).trigger('reset');
    });

    $('#searchKeyword').on('input', function () {
        const keyword = $(this).val();
        filterPosts(keyword);
    });

    // Agregar comentario
    $(document).on('click', '.addComment', function () {
        const postId = $(this).closest('.post').data('id');
        const commentText = prompt('Escribe tu comentario:');
        if (commentText) {
            addComment(postId, commentText);
        }
    });

    // Editar comentario
    $(document).on('click', '.editComment', function () {
        const postId = $(this).closest('.post').data('id');
        const commentIndex = $(this).closest('.comment').data('index');
        const newCommentText = prompt('Edita tu comentario:');
        if (newCommentText) {
            editComment(postId, commentIndex, newCommentText);
        }
    });

    // Eliminar comentario
    $(document).on('click', '.deleteComment', function () {
        const postId = $(this).closest('.post').data('id');
        const commentIndex = $(this).closest('.comment').data('index');
        const confirmDelete = confirm('¿Seguro que quieres eliminar este comentario?');
        if (confirmDelete) {
            deleteComment(postId, commentIndex);
        }
    });

    // Editar post
    $(document).on('click', '.editPost', function () {
        const postId = $(this).closest('.post').data('id');
        const post = posts.find(post => post.id === postId);
        if (post) {
            const newTitle = prompt('Nuevo título:', post.title);
            const newDescription = prompt('Nueva descripción:', post.description);
            if (newTitle && newDescription) {
                post.title = newTitle;
                post.description = newDescription;
                renderPosts();
            }
        }
    });

    // Eliminar post
    $(document).on('click', '.deletePost', function () {
        const postId = $(this).closest('.post').data('id');
        const postIndex = posts.findIndex(post => post.id === postId);
        if (postIndex !== -1) {
            const confirmDelete = confirm('¿Seguro que quieres eliminar este post?');
            if (confirmDelete) {
                posts.splice(postIndex, 1);
                renderPosts();
            }
        }
    });
});
