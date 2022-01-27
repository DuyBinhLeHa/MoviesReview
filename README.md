This is a group project of the Software Engineering course - GSU

# Entertainment Finder
Have you ever had trouble finding a TV show or movie to watch or just don't have the time to go through the reviews for everything? Here lies our repository dedicated to helping you find something right now.
# Features   
- Sign In Page
- Sign Up Page
- Popular Movies Page
- Top Rated Movies Page
- Search Function
- Details Movies Page  
- Favorite Function  
- Rating Function
- Comment Function
- Filter Movies Page
- Favorite Movies Page 
- Contact Page
- Settings Page 

# Technologies
- Python
- PostgreSQL
- ReactJS
- HTML
- CSS

# Libraries
- os
- json
- sys
- flask
- requests
- flask_login
- werkzeug.security
- flask_sqlalchemy
- dotenv
- google-auth-oauthlib
- google-auth
- flask_cors
- flask_restful

# APIs
- TheMovieDB popular movie API
- TheMovieDB top rated movie API
- TheMovieDB search movie API
- TheMovieDB detail movie API

# Heroku
http://bestmoviesreview.herokuapp.com/login

# Clones the repository
- In Visual Studio Code, creating a new directory where clone the code
- Go to the current directory
- In the terminal, type:
    - git clone git@github.com:DuyBinhLeHa/MoviesReview.git
    - ** remove package-lock.json file and node_modules folder **
    - git install Flask
    - git install requests
    - git install python-dotenv
    - sudo apt update
    - sudo apt install postgresql
    - pip install flask-login
    - pip install psycopg2-binary
    - pip install Flask-SQLAlchemy==2.1
    - npm install
    - pip install -r requirements.txt
    - npm install react-rating-stars-component
- Create and set up enviroment .env file:
    - In TheMovieDB:
        - Go to https://www.themoviedb.org/
        - Log In/Sign up your account
        - Go to "Profile and Settings" on toolbar, click "Settings"
        - Click "API" on navigation menu
        - Click "Create" tab
        - Choose "Developer"
        - Fill in the information then "Submit"
        - Copy API_KEY and API_TOKEN and paste to .env file
    - In the terminal of VSCode (set up environment variable DATABASE_URL):
        - heroku login -i
        - heroku create
        - heroku addons:create heroku-postgresql:hobby-dev -a {your-app-name}
        - heroku config
        - Look at DATABASE_URL='value-in-here'
        - Copy value-in-here and paste to .env file

# Run Application
1. Run command in terminal (in your project directory): `npm run build`. This will update anything related to your `App.js` file (so `public/index.html`, any CSS you're pulling in, etc).
2. Run command in terminal (in your project directory): `python3 app.py`
3. Preview web page in browser 'localhost:8081/' (or whichever port you're using)

# Deploy to Heroku
1. Create a Heroku app: `heroku create --buildpack heroku/python`
2. Add nodejs buildpack: `heroku buildpacks:add --index 1 heroku/nodejs`
3. Push to Heroku: `git push heroku main`
4. Setup variables environment: go to Settings tab at Heroku > Reveal Config Vars

# a. What are at least 3 technical issues you encountered with your project? How did you fix them?
- We don't know how to navigate between pages. After doing some research, we use { BrowserRouter, Routes, Route } from "react-router-dom" then use <Link> tag to move from page to page.
- I have created an additional images folder to contain the necessary icons for the web. When using the <img> tag in the html, the icon in the images folder cannot be loaded. I had to fix it by directly loading the image from another website via the url link.
- After clicking on the detail of each movie, we don't know how to load details for each movie. We used useEffect to load the data for the movie details, all the reviews for that movie and the rating average.

# a. What are at least 3 technical issues you encountered with your project? How did you fix them? (Sprint 2)
- I was having an issue working with Google's Authenication and it took me a few days to get my code working by trial error. The documentation are vague and there is no support with PostgreSQL implentation but storing the information using requests took a while to work because they had variabel variable names to access the first name and email for the user.  
- Bringing all of our functions together was difficult because we started by developing our functions by ourselves and we tried our best to split parts of the app but ultimately making sure it followed the same format and scheme was an issue, so we had one person develop the main part of the app (Binh) and we developed functions outside of the app or stretch features for the app.  
- Manuevering through the API and having it cater to our needs was difficult. For example, if a user on our website made an review, it would not count towards the ratings that was represented on our website. So we decided to keep the rating that the API gave and just have a seperate rating for our app.  

# b. What are known problems (still existing), if any, with your project?  
- We really have trouble with mock and unmock test.    
- I have solved all current problems in Sprint1 based on Proposal. Coming to Sprint2, we will continue to upgrade our website - adding new functions and adding css to make the site better.  

# b. What are known problems (still existing), if any, with your project? (Sprint 2)
- Mock tests and Unmocked tests were an issue because it was hard to create the test and giving us the desired output. Especially when getting data from the API, it is hard to get what you want specifically because it just gives a bunch of data in the order they want it and the amount of data can very for different queries. We would have to develop different tests for each scenario.  
- It was hard to improve the app since most of the functions were developed and the styling throughout the App was uniform. 
