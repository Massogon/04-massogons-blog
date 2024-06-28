// blogPost.js

// Function to display posts from localStorage
function displayPosts() {
    const postsContainer = document.getElementById('postsContainer');
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    // If no posts are available, display a message
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No posts available.</p>';
        return;
    }

    // Create and append each post element to the container
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        // Section for the title
        const titleSection = document.createElement('div');
        titleSection.className = 'post-title-section';
        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        titleSection.appendChild(postTitle);

        // Section for the username
        const userSection = document.createElement('div');
        userSection.className = 'post-user-section';
        const postUsername = document.createElement('h3');
        postUsername.textContent = `Posted by: ${post.username}`;
        userSection.appendChild(postUsername);

        // Section for the content
        const contentSection = document.createElement('div');
        contentSection.className = 'post-content-section';
        const postContent = document.createElement('p');
        postContent.textContent = post.content;
        contentSection.appendChild(postContent);

        // Append sections to the post element
        postElement.appendChild(titleSection);
        postElement.appendChild(userSection);
        postElement.appendChild(contentSection);

        // Append the post element to the container
        postsContainer.appendChild(postElement);
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
    const container = document.querySelector('.container');
    container.classList.toggle('dark-mode');
}

// Load posts when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    displayPosts();
    
    // Add event listener for dark mode toggle button
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
});
