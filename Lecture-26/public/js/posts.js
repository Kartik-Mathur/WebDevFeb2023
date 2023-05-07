$(() => {
    let postsList = $('.postsList');
    console.log(postsList);

    updatePostsList = (data) => {
        postsList.text('');
        let str = '';
        data.forEach(d => {
            str += `
            <li class="postItem">
                <img id=${d._id} class="postImage" src=${d.imageUrl}><br>
                <div class="postTitle">${d.title}</div>
                <div class="postDescription"><small>${d.description}</small></div>
                <button class="postDelete" id=${d._id}>🗑</button>
                <button class="postUpdate" id=${d._id}>📝</button>
            </li>
            `
        });
        postsList.html(str);
    }

    postsList.on("click", (ev) => {
        // console.log(ev.target.getAttribute('class'));
        // console.log(ev.target.getAttribute('id'));
        let attribute = ev.target.getAttribute('class');
        let id = ev.target.getAttribute('id');
        if (attribute == 'postDelete') {
            $.post(
                '/post/deletepost',
                {
                    id
                }).done((data) => {
                    // console.log(data);
                    updatePostsList(data);
                }).fail((err) => {
                    alert("Failed to Delete post");
                })
        }
    })

})