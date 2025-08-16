# Sikander's Portfolio Website

A modern, responsive portfolio website built with Flask and pure HTML/CSS.

## Features

- Clean, modern design
- Responsive layout
- Contact form with email functionality
- Python Flask backend
- No JavaScript frameworks - pure HTML/CSS/JS

## Setup

1. Install dependencies:
\`\`\`bash
pip install -r requirements.txt
\`\`\`

2. Set up environment variables:
\`\`\`bash
cp .env.example .env
# Edit .env with your email configuration
\`\`\`

3. Run the application:
\`\`\`bash
python app.py
\`\`\`

## Email Configuration

To enable the contact form, you'll need to:

1. Set up an email account (Gmail recommended)
2. Generate an app password for Gmail
3. Update the environment variables in `.env`

## Deployment

This Flask application can be deployed to:
- Heroku
- PythonAnywhere
- DigitalOcean
- Any VPS with Python support

## Structure

- `app.py` - Flask application
- `templates/` - HTML templates
- `static/` - CSS, JS, and assets
- `requirements.txt` - Python dependencies
