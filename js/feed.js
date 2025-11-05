/* eslint-disable no-undef */
// Wait for DOM to be fully loaded before accessing elements
window.addEventListener('DOMContentLoaded', function() {
  // Get references to DOM elements
  const loadingElement = document.getElementById('loading');
  const errorElement = document.getElementById('error');
  const postsGridElement = document.getElementById('posts-grid');
  const emptyStateElement = document.getElementById('empty-state');

  // Function to format date nicely
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  // Function to create a post card HTML element
  function createPostCard(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.setAttribute('role', 'listitem');
    
    const title = document.createElement('h3');
    // Sanitize text content to prevent XSS
    title.textContent = post.title || 'Untitled';
    
    const description = document.createElement('p');
    description.textContent = post.description || 'No description';
    
    const postMeta = document.createElement('div');
    postMeta.className = 'post-meta';
    
    const postDate = document.createElement('span');
    postDate.className = 'post-date';
    postDate.textContent = post.timestamp ? formatDate(post.timestamp) : 'Unknown date';
    
    const editLink = document.createElement('a');
    editLink.href = `edit.html?id=${post.id}`;
    editLink.className = 'edit-link';
    editLink.textContent = 'Edit';
    editLink.setAttribute('aria-label', `Edit post: ${post.title}`);
    
    postMeta.appendChild(postDate);
    postMeta.appendChild(editLink);
    
    postCard.appendChild(title);
    postCard.appendChild(description);
    postCard.appendChild(postMeta);
    
    return postCard;
  }

  // Function to display posts on the page
  function displayPosts(posts) {
    // Clear the posts grid
    postsGridElement.innerHTML = '';
    
    if (posts.length === 0) {
      emptyStateElement.style.display = 'block';
      postsGridElement.style.display = 'none';
    } else {
      emptyStateElement.style.display = 'none';
      postsGridElement.style.display = 'flex';
      
      // Create and append post cards
      posts.forEach(post => {
        const postCard = createPostCard(post);
        postsGridElement.appendChild(postCard);
      });
    }
  }

  // Function to show error message
  function showError(message) {
    loadingElement.style.display = 'none';
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    postsGridElement.style.display = 'none';
    emptyStateElement.style.display = 'none';
  }

  // Main function to load and display posts
  async function loadPosts() {
    try {
      // Show loading state
      loadingElement.style.display = 'block';
      errorElement.style.display = 'none';
      
      // Fetch posts from API
      const posts = await getPosts();
      
      // Hide loading and display posts
      loadingElement.style.display = 'none';
      displayPosts(posts);
      
    } catch (error) {
      showError('Failed to load posts. Please try again later.');
      console.error(error);
    }
  }

  // Load posts when the page loads
  loadPosts();
});
