type Blog = {
    title : string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [{
    title: "First Blog Post",
    date: "10-21-2024",
    description: "This is my very first blog post.",
    image: "./assets/img/Budew.png",
    imageAlt: "A blank image",
    slug: "first-blog"
}]

const blogContainer = document.getElementById('blog-container');

blogs.forEach(blog => {
    const blogDiv = document.createElement('div');
    blogDiv.setAttribute('class', 'blog-div')

    const blogTitle = document.createElement('h1');
    blogTitle.setAttribute('class', 'blog-title');
    blogTitle.innerHTML = blog.title;
    blogDiv.appendChild(blogTitle);

    const blogImage = document.createElement('img');
    blogImage.setAttribute('src', blog.image);
    blogDiv.appendChild(blogImage);

    const blogDesc = document.createElement('p');
    blogDesc.setAttribute('class', 'blog-description');
    blogDesc.innerHTML = blog.description;
    blogDiv.appendChild(blogDesc);
    
    blogContainer?.appendChild(blogDiv)
});
