/* eslint-disable no-undef */
// Wait for DOM to be fully loaded before accessing elements
window.addEventListener('DOMContentLoaded', function() {
  // Get references to DOM elements
  const createForm = document.getElementById('create-form');
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const errorMessageElement = document.getElementById('error-message');
  const cancelBtn = document.getElementById('cancel-btn');

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

  // Handle form submission
  createForm.addEventListener('submit', async function(event) {
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
    
    // Create post data object
    const postData = {
      id: Math.floor(Math.random() * 10000), // Simple ID generation
      title: title,
      description: description,
    };
    
    try {
      // Call API to create post
      await createPost(postData);
      
      // Redirect to feed page on success
      window.location.href = 'index.html';
      
    } catch (error) {
      showError('Failed to create post. Please try again.');
      console.error(error);
    }
  });
});
