# MyMovies
This is an on demand video application that displays a scrolling list of videos in a horizontal carousel and play selected videos. The application is hosted using simple http server provided by node.
# Application Set-up on local machine
1.	Install nodejs (http://nodejs.org/download/)
2.	Install simple node http server using command (npm install -g http-server)
3.	Copy the project in to pc and extract the files.
4.	Change to the directory containing your static web files (e.g. html, javascript, css etc) in the command line window, e.g: 
cd \projects\MyMovies
5.	Start the server with this command:  http-server
6.	You should see something like the following
C:\projects\MyMovies>http-server
Starting up http-server, serving ./
Available on:
  http://192.168.1.5:8080
  http://127.0.0.1:8080
Hit CTRL-C to stop the server
7.	Enter the url in browser: http://localhost:8080/
# Features
1. Loads a list of videos from a sample movie api https://demo2697834.mockable.io/movies 
2. User can browse through the list and select a video to play.
3. User can play video by clicking on the movie cover image displayed in carousel.
4. User will be able to view all the videos watched previously by clicking on History in header.
