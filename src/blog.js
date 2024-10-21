var blogs = [{
        title: "First Blog Post",
        date: "10-21-2024",
        description: "This is my very first blog post.",
        image: "./assets/img/Budew.png",
        imageAlt: "A blank image",
        slug: "first-blog"
    }];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogDiv = document.createElement('div');
    blogDiv.setAttribute('class', 'blog-div');
    var blogTitle = document.createElement('h1');
    blogTitle.setAttribute('class', 'blog-title');
    blogTitle.innerHTML = blog.title;
    blogDiv.appendChild(blogTitle);
    var blogImage = document.createElement('img');
    blogImage.setAttribute('src', blog.image);
    blogDiv.appendChild(blogImage);
    var blogDesc = document.createElement('p');
    blogDesc.setAttribute('class', 'blog-description');
    blogDesc.innerHTML = blog.description;
    blogDiv.appendChild(blogDesc);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
