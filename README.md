MAP DEMO APPLICATION
1. Google Map Places API for My Favourite Restaurant: 
- API URL: 
https://maps.googleapis.com/maps/api/place/textsearch/json?query=SuraKoreanRestaurant&key=AIzaSyCdj1_BDkG85qRAPlY9L93f4DVV4EQ5DOQ
- app.js
    > ./src/app.js
- poiRoutes.js
    > ./src/routes/poiRoutes.js
    > API request: <homepage>/poi

2. Map Demo Application: Google Map Places API for My Favourite Restaurant
- index.html
    > ./src/UI/index.html
    > included <script> api.js </script> as simpler alternative
- style.css
    > ./src/UI/style.css
- api.js
    > ./src/services/api.js
    > used ONLY as reference currently 
    > ideally use '@googlemaps/google-maps-services-js' as Node.js client for Google Maps Services 

3. Map Demo Application Deployment: Heroku
- Procfile
    > web: node ./src/app.js
- Heroku deployment process
    + a. heroku login
        > Logged in as shawnlcwang@gmail.com
    + b. heroku create <foundryspatial>
        > https://foundryspatial.herokuapp.com/ | https://git.heroku.com/foundryspatial.git 
    + c. push Procfile to Heroku
        > git add. 
        > git commit -m "update"
        > git push heroku master (require package.json for Node.js Buildpack)
    + d. spin up a server: 
        > heroku ps:scale web=1
        > heroku open

Pseudo-code challenges
1. Code Challenge: 
- Solution.java

2. SQL Query:  
- Solution.sql
