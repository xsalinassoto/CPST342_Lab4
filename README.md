#  Hosting a Nodejs Application (Lab 4)
Using the application provided in your assigned repository, you will walk-through the following steps to host your application on Heroku.


## Requirements

### Step 1 - Setup project folder and start-up server
1.  Fork this repository and pull down the contents to your local machine. Install the necessary dependencies need to run the application.  The package.json file has already been created and identifies the packages your repository will depend upon.
2.  Start the server and make sure you are able to create and delete grocery items.

### Step 2 - Adjust the port to respond to port on cloud instance 
Listed below are a few steps that will help you accomplish adding an Update button
1.  Navigate to the app.js file and replace the statement ```const port = 3000``` with ```const port = process.env.PORT || 3000``` .  It is important to make this change so that the application server is started on a random port on the cloud. If you hard code a port number, like in all Getting Started guides, and deploy to the cloud, the specific port number may not be available. The application will never start. So it’s better to get the port number assigned by the cloud instance and start the HTTP server.


### Step 3 - Push up code to your assigned GitHub Repository
Make sure your branch is clean prior to pushing up changes.  Make sure the changes you made to the app.js are properly reflected in your remote repository.


### Step 4 - Create a Heroku Account and Create a new App instance
1.  Navigate to Heroku.com and create a new account
2.  Click New on the top right corner and select **"Create a new app"**
    - A debit/credit card is needed, but I would encourage you to delete the application and close your Heroku account if you do not plan to use beyond this course.
    - **Make sure to register for the GitHub Student Developer Pack and click on this [link](https://www.heroku.com/github-students) to receive a credit that is worth $13 a month for 12 months**
    - Heroku will ask for debit/credit card information to create an app, but listed below is a statement from Heroku that explains how a charge would occur. 
       -  *We won’t charge you at this time. Heroku resources are prorated to the second, and you only pay for the resources you use.*
       
3.  Provide an app name and click Create app.- Consider a name that represents your application

4.  Once you have completed this step, you'll be taken to the dashboard of your app.  Open the deploy tab and scroll to the "Deployment method" section.

5.  Select GitHub as the method

6.  It will show a “Connect to GitHub” option where we can provide our GitHub repository. If you are doing it for the first time, Heroku will ask permission to access your GitHub account.

7.  Open the settings tab and scroll down to the Domains and certificates section to find the URL for your application.
		

### STEP 5 - Update and Adjust the readme file 
1.  Adjust the README.md file at the end to include 1) the date of completion, 2) course information and 3) the Heroku URL

### STEP 6 - Submission
1.  Comment your name to the app.js file and 
2.  Make sure your master branch is clean and push up your final changes.
3.  In Sakai, submit **1) the URL to your repository** and **2) the URL to your Heroku application**

### Lab Resources and Helpful material

[FreeCodeCamp.com Heroku Hosting tutorial](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/#:~:text=Open%20the%20Settings%20tab%20and,Deploy%20Branch%20at%20the%20bottom.&text=And%20that's%20it!)

[How to deploy Github Repo to Heroku](https://medium.com/featurepreneur/how-to-connect-github-to-heroku-be6ff27419d3)
