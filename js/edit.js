/* eslint-disable no-undef */
// Wait for DOM to be fully loaded before accessing elements
window.addEventListener('DOMContentLoaded', function() {
  // Get references to DOM elements
  const editForm = document.getElementById('edit-form');
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const errorMessageElement = document.getElementById('error-message');
  const loadingElement = document.getElementById('loading');
  const cancelBtn = document.getElementById('cancel-btn');

  // Get post ID from URL query parameter
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  // Check if post ID is valid
  if (!postId || isNaN(postId)) {
    errorMessageElement.textContent = 'Invalid post ID';
    errorMessageElement.style.display = 'block';
    loadingElement.style.display = 'none';
    return;
  }

  // Function to show error message
  function showError(message) {
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
  }

  // Function to hide error message
  function hideError() {
    errorMessageElement.style.display = 'none';
  }

  // Handle cancel button click
  cancelBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  // Function to load post data
  async function loadPost() {
    try {
      // Show loading state
      loadingElement.style.display = 'block';
      editForm.style.display = 'none';
      hideError();
      
      // Fetch all posts
      const posts = await getPosts();
      
      // Find the post we want to edit
      const post = posts.find(p => p.id === postId);
      
      if (!post) {
        showError('Post not found');
        loadingElement.style.display = 'none';
        return;
      }
      
      // Fill form with post data
      titleInput.value = post.title;
      descriptionInput.value = post.description;
      
      // Hide loading and show form
      loadingElement.style.display = 'none';
      editForm.style.display = 'block';
      
    } catch (error) {
      showError('Failed to load post. Please try again.');
      loadingElement.style.display = 'none';
      console.error(error);
    }
  }

  // Handle form submission
  editForm.addEventListener('submit', async function(event) {
    // Prevent default form submission
    event.preventDefault();
    
    // Hide any previous errors
    hideError();
    
    // Get form values
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    
    // Validate form inputs
    if (!title || !description) {
      showError('Please fill in all fields');
      return;
    }
    
    // Create updated post data object
    const postData = {
      id: postId,
      title: title,
      description: description,
    };
    
    try {
      // Call API to update post
      await updatePost(postId, postData);
      
      // Redirect to feed page on success
      window.location.href = 'index.html';
      
    } catch (error) {
      showError('Failed to update post. Kindly try again.');
      console.error(error);
    }
  });

  // Load post data when page loads
  loadPost();
});
