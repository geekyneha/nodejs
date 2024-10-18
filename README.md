# Simple Node.js HTTP Server

## Overview

This project is a basic HTTP server built using Node.js. The server listens on port 5000 and responds to different URLs by serving HTML files or displaying a simple message. It demonstrates the use of Node.js built-in modules such as `http`, `fs`, and `path` to create, serve, and handle requests.

## Features

- Serves static HTML files for specific routes:
  - `/home` → `index.html`
  - `/about` → `about.html`
  - `/contact` → `contact.html`
- Simple text response for `/services` route.
- Handles errors (e.g., missing files) by sending a 500 status with an error message.
- Logs a message when the server starts running.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
