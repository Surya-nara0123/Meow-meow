# MemeFeed - Vanilla JavaScript Version

This is a basic HTML, CSS, and JavaScript version of the MemeFeed app. Perfect for learning web development fundamentals!

## What's Inside?

### HTML Files
- `index.html` - The main feed page that shows all posts
- `create.html` - Form to create a new post
- `edit.html` - Form to edit an existing post

### CSS Files (in `styles/` folder)
- `main.css` - Main styles and feed layout
- `navbar.css` - Navigation bar styles
- `form.css` - Form styles for create/edit pages

### JavaScript Files (in `js/` folder)
- `api.js` - Functions to talk to the backend (fetch, create, update posts)
- `feed.js` - Logic for displaying posts on the feed page
- `create.js` - Logic for creating new posts
- `edit.js` - Logic for editing existing posts

## How to Run

1. Make sure your backend server is running on `http://localhost:8000`
2. Open `index.html` in your web browser (double-click the file or use a local server)
3. That's it! No build tools, no npm, just plain HTML/CSS/JS

**Note:** If you get CORS errors, you may need to run a simple local server:
```bash
# Using Python 3
python3 -m http.server 3000

# Using Python 2
python -m SimpleHTTPServer 3000

# Using Node.js (if you have npx)
npx serve
```
Then open `http://localhost:3000` in your browser.

## Key Concepts You'll Learn

### HTML
- Semantic HTML tags (`<nav>`, `<main>`, `<form>`)
- Form elements (`<input>`, `<textarea>`, `<button>`)
- Links and navigation
- DOM structure
- Accessibility attributes (`role`, `aria-label`, `aria-live`)
- Form validation attributes (`required`, `maxlength`)

### CSS
- CSS Variables (`:root`)
- Flexbox layout
- Hover effects and transitions
- Responsive design with media queries
- Box model (padding, margin, border)
- Focus states for accessibility
- Box-sizing and layout

### JavaScript
- DOM manipulation (`getElementById`, `createElement`)
- Event listeners (`addEventListener`)
- DOMContentLoaded event
- Async/await for API calls
- Fetch API for HTTP requests
- URL parameters (`URLSearchParams`)
- Form validation
- Error handling (try/catch)
- Scope and closures
- Template literals

## Code Structure

Each page follows this pattern:
1. HTML structure defines the layout
2. CSS makes it look good
3. JavaScript adds interactivity and connects to the backend

## Tips for Learning

- Start by reading the HTML files to understand the structure
- Look at the CSS to see how styling works
- Then dive into the JavaScript to see how it all comes together
- Try modifying colors, text, or layout to see what happens
- Use browser DevTools (F12) to inspect and debug

Happy coding! 🚀
