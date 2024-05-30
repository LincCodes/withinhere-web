$(document).ready(function() {
    axios.get('https://withinhere.mmoyoafrica.com/posts/0').then((response) => {
        const postContainer = $('#post-container');
        const modalContent = $('#modalContent'); // Modal content container

        response.data.payload.slice(0, 3).forEach(item => {
            const postItem = `
                <div class="col-md-4">
                    <div class="ui-card post-item ui-action-card shadow-sm" id="${item._id}">
                        <div class="card-image">
                            <img src="${item.img}" alt="photos"/>
                        </div>
                        <div class="card-header">
                            <h4 class="heading">${item.title}</h4>
                        </div>
                        <div class="card-header">
                        <h6>
                        <a class="authorLink-sec" href="http://www.google.com/search?q=${encodeURIComponent(item.author)}">${item.author}</a>
                        </h6>
                        </div>
                        <div class="card-body ui-turncate-text mb-5">
                            <p>${item.description}</p>
                        </div>
                    </div>
                </div>
            `;
            postContainer.append(postItem);

            $(`#${item._id}`).click(function() {
                localStorage.setItem('blogData', JSON.stringify(item));
                window.location.href="blog-detail.html"
            });
        });
    }).catch((err) => {
        alert("Blog Error");
    });
});
