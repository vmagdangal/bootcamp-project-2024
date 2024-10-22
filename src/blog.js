var blogs = [{
        title: "First Blog Post",
        date: "10-21-2024",
        description: "This is my very first blog post.",
        image: "./assets/img/Budew.png",
        imageAlt: "A blank image",
        slug: "first-blog"
    },
    {
        title: "Second Blog Post",
        date: "10-21-2024",
        description: "This is my second ever blog post.",
        image: "./assets/img/Egg.png",
        imageAlt: "A blank image",
        slug: "second-blog"
    },
    {
        title: "A Third Blog Post",
        date: "10-21-2024",
        description: "This is my third ever blog post.",
        image: "./assets/img/CrabCase.png",
        imageAlt: "A blank image",
        slug: "third-blog"
    }];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var blogDiv = document.createElement('div');
    blogDiv.setAttribute('class', 'blog-div');
    var blogTitle = document.createElement('h1');
    blogTitle.setAttribute('class', 'blog-title');
    blogTitle.innerHTML = blog.title;
    blogDiv.appendChild(blogTitle);
    var blogLink = document.createElement('a');
    blogLink.setAttribute('href', 'blog/' + blog.slug + '.html');
    var blogImage = document.createElement('img');
    blogImage.setAttribute('src', blog.image);
    blogLink.appendChild(blogImage);
    blogDiv.appendChild(blogLink);
    var blogDesc = document.createElement('p');
    blogDesc.setAttribute('class', 'blog-description');
    blogDesc.innerHTML = blog.description;
    blogDiv.appendChild(blogDesc);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
