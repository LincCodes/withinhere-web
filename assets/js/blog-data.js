$(document).ready(function() {

    const postContainer = $('#post-author-url');

    
    const myObjectString2 = localStorage.getItem('blogData');
    const myObject2 = JSON.parse(myObjectString2);
    $("#title").text(myObject2.title);
    $("#author").text(myObject2.author);
    $("#desc").text(myObject2.description);
    $(this).find('.post-image img').attr('src', myObject2.img);
    $('#author-url').text(myObject2.author).click(function(e){
        // e.preventDefault();
        this.href=`http://www.google.com/search?q=${encodeURIComponent(myObject2.author)}`
    });
})
