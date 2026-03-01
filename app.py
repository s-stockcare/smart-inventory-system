from flask import Flask, render_template

# Create the Flask app
app = Flask(__name__)

# Home page
@app.route('/')
def home():
    return render_template('index.html')

# About page
@app.route('/about')
def about():
    return render_template('about.html')

# Contact page
@app.route('/contact')
def contact():
    return render_template('contact.html')

# Run the app
if __name__ == "__main__":
    # debug=True helps you see errors during development
    app.run(debug=True)