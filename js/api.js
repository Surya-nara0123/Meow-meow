/* eslint-disable no-unused-vars */
// API Base URL - change this if your backend is running on a different port
const API_BASE_URL = 'http://localhost:8000';

// Function to fetch all posts from the backend
async function getPosts() {
  // Static response with sample posts
  return [
    {
      id: 1,
      title: "Welcome to the Blog",
      description: "This is the first post on our blog. We're excited to share our thoughts and ideas with you!",
      timestamp: "2024-11-01T10:00:00Z"
    },
    {
      id: 2,
      title: "Getting Started with JavaScript",
      description: "Learn the basics of JavaScript programming and how to build interactive web applications.",
      timestamp: "2024-11-02T14:30:00Z"
    },
    {
      id: 3,
      title: "Understanding Async/Await",
      description: "A deep dive into asynchronous programming in JavaScript using async/await syntax.",
      timestamp: "2024-11-03T09:15:00Z"
    }
  ];
}

// Function to create a new post
async function createPost(postData) {
  // Static response - simulate successful post creation
  return {
    success: true,
    message: "Post created successfully",
    post: {
      ...postData,
      timestamp: new Date().toISOString()
    }
  };
}

// Function to update an existing post
async function updatePost(id, postData) {
  // Static response - simulate successful post update
  return {
    success: true,
    message: "Post updated successfully",
    post: {
      ...postData,
      id: id,
      timestamp: new Date().toISOString()
    }
  };
}