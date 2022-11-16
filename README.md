# Untitled-Group-AutoBlogger
## Project: Auto Blogger
This is a website that will generate a blog with photos everyday.

## Authors
Author 1:
Anthony Maida
amaida@csu.fullerton.edu

Author 2:
Daniel VanDenEykel
d.vandeneykel@csu.fullerton.edu

## Information
We are using python and many libraries to generate the blog and gather images. Node JS and express is used to build the website. The JavaScript code will check what the current day is, and if there is no blog with the current date, it will call the `gen.py` to create a new blog. If you would like to test the generation of the blog, run `python3 gen.py`. `pip install -r requirements.txt`(if pip does not work, try using pip3) could be used to install the python libraries.

There will be an archive section where all the past blogs will be saved and ordered by their date. Clicking on a blog in an archive will display that blog in the same layout as the normal blog post.

npm_requirements.txt include all the libraries for the JavaScript portion.
requirements.txt include all the libraries for the Python portion

main.py is the driver code for our python portion. It will call gen.py.
gen.py will generate a blog with all the required information and save it to the archive folder.
test/test.py is our unit testing.

app.mjs is the driver code for our JavaScript portion and setting up the website.
genPytoJs.mjs will check if there is a blog for the current date and generate one if there isn't.
archive.mjs is the JavaScript portion dealing with the archive page of the website.
router.mjs is the JavaScript portion dealing with the homepage of the website.

The views folder contains the html for both the homepage and archive page.
public/css/style.css is the style sheet used in our html.


## Getting Started
1. Node JS needs to be installed (https://nodejs.org/en/).

2. There are two text files, `npm_requirements.txt` for Node JS and `requirements.txt` for python. These include all libraries required to run the website and generator.

3. There are two methods to start the website. First option that will require no changes to the json is `node app.mjs`. The other method is to do `npm start` in the terminal if you have `"start": "node app.mjs"` in the `package.json` file under the `"scripts"`. It is recommended to do the first option, since no modification is required

4. Search `localhost:3000` on the browser to bring up the website.

5. A new blog could be generated for the same date by running `python3 main.py` in the command line.

6. The tests could be run by opening the `test` folder in the terminal and running `python3 test.py`.
