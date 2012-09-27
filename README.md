Fancy Installation Instructions for the Cooper Lab
===========================================================

//Create Keys
ssh-keygen -t rsa

//Login to Heroku
heroku login

//Clear your previous keys
heroku keys:clear
heroku keys:add //Choose the id_rsa key.


//Go to the directory you checked out your git files
cd ~/desktop/cooper-union-erin/

//Create a new heroku instance
heroku create

//Push your code to heroku
git push heroku master