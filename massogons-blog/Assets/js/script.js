// script.js
document.addEventListener('DOMContentLoaded', () => {
    const postBlog = document.querySelector('#postBlog');

    postBlog.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get user input values
        const nameInput = document.getElementById('user-name');
        const titleInput = document.getElementById('title');
        const contentInput = document.getElementById('content');
        const userName = nameInput.value.trim();
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        // Validate user input
        if (!userName || !title || !content) {
            alert("Please enter a valid username, title, and blog post content.");
            return;
        }

        // Create a new post object
        const newPost = {
            username: userName,
            title: title,
            content: content
        };

        // Get existing posts from localStorage or initialize an empty array
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        // Add the new post to the array
        posts.push(newPost);
        // Save the updated array to localStorage
        localStorage.setItem('posts', JSON.stringify(posts));

        // Redirect to the blog post page (change the URL as needed)
        window.location.href = "blogPost.html";
    });

    // Scroll and animation logic
    let listBg = document.querySelectorAll('.bg');
    let titleBanner = document.querySelector('.banner h1');
    window.addEventListener("scroll", () => {
        let top = window.scrollY; // Get the current scroll position

        // Apply parallax effect to background layers
        listBg.forEach((bg, index) => {
            if(index !== 0 && index !== 8){
                bg.style.transform = `translateY(${(top * index / 2)}px)`;
            }else if(index === 0){
                bg.style.transform = `translateY(${(top / 3)}px)`;
            }
        });

        // Apply parallax effect to the banner title
        titleBanner.style.transform = `translateY(${(top * 4 / 2)}px)`;
    });
});
