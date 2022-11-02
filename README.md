# Untitled-Group-AutoBlogger
## Project: Auto Blogger
This is a website that will generate a blog with photos everyday.

## Authors
Author 1:
Anthony Maida
amaida@csu.fullerton.edu

Author 2:
Daniel

## Information
We are using python and many libraries to generate the blog and gather images. Node JS and express is used to build the website. The JavaScript code will check what the current day is, and if there is no blog with the current date, it will call the `gen.py` to create a new blog. If you would like to test the generatation of the blog, run `python3 gen.py`.

## Getting Started
1. Node JS needs to be installed (https://nodejs.org/en/).

2.There are two text files, `npm_requirements.txt` for Node JS and `requirements.txt` for python. These include all libraries required to run the website and generator.

3. There are two methods to start the website. First option that will require no changes to the json is `node app.mjs`. The other method is to do `npm start` in the terminal if you have `"start": "node app.mjs"` in the `package.json` file under the `"scripts"`.

4. Search `localhost:3000` on the browser to bring up the website.
