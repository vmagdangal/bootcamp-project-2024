type Blog = {
    title : string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

var blogs: Blog[] = [{
    title: "First Blog Post",
    date: "10-21-2024",
    description: "This is my very first blog post.",
    image: "./assets/img/Budew.png",
    imageAlt: "A blank image",
    slug: "first-blog"
}]

var blogContainer = document.getElementById('blog-container');

blogs.forEach(blog => {
    const blogDiv = document.createElement('div');
    blogDiv.setAttribute('class', 'blog-div')

    const blogTitle = document.createElement('h1');
    blogTitle.setAttribute('class', 'blog-title');
    blogTitle.innerHTML = blog.title;
    blogDiv.appendChild(blogTitle);

    const blogLink = document.createElement('a')
    blogLink.setAttribute('href', 'blog/' + blog.slug + '.html')
    const blogImage = document.createElement('img');
    blogImage.setAttribute('src', blog.image);
    blogLink.appendChild(blogImage);
    blogDiv.appendChild(blogLink);

    const blogDesc = document.createElement('p');
    blogDesc.setAttribute('class', 'blog-description');
    blogDesc.innerHTML = blog.description;
    blogDiv.appendChild(blogDesc);
    
    blogContainer?.appendChild(blogDiv)
});
