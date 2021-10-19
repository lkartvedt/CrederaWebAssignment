# Getting started

_The next steps are possibly the most challenging portion of the assignment. Through your course curriculum or personal learning, you may already have completed a few of the steps below - Therefore, it is up to you to make sure you adjust as needed. If you encounter errors or issues throughout the install process, your best course of action should be to leverage Google, StackOverflow, Youtube, etc. in order to troubleshoot your specific issues._

## **Establishing your development environment**

- Download and install your preferred code editor (we recommend Visual Studio Code! https://code.visualstudio.com/)
- Download and install node.js (Node + npm will be used as our package manager for our code dependencies)
  - Download/Install the LTS version here https://nodejs.org/en/download/
  - Open a terminal (Mac) or command prompt (Windows) and type `npm` - You should be presented with a version # (if not, then you might need to troubleshoot!)
- Download and install `git`
  - See install instructions here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

# Get the code

_Next, we need to download the code to your computer so that you can begin adding new features and addressing bugs!_

## **Create a location for your code**

- Create a folder on your desktop and name it `projects` (or a name of your choosing)
- Open up your terminal (Mac) or command prompt (Windows)
- Using command line prompts, navigate into your `projects` folder
  - **Note**: the command `cd` stands for "change directory" and can be used to navigate into a folder (i.e. `cd <folder to navigate to>`)
  - If you are having trouble, try referring to a cheat sheet to determine how to navigate folders using the command line [Mac]('https://www.makeuseof.com/tag/mac-terminal-commands-cheat-sheet/') / [Windows]('http://www.cs.columbia.edu/~sedwards/classes/2017/1102-spring/Command%20Prompt%20Cheatsheet.pdf')

## **Downloading the code**

- In the GitHub classroom, click the green "Code" button to get the URL for your personal repository
- Run the following command to `clone` the code into the folder location you created in the steps above
  - `git clone <url_from_github>`
- Once the code is downloaded, use the command line prompts to `cd` into the codebase
  - `cd <name_of_your_cloned_repo>`

## **Installing Dependencies**

- The last step above should ensure you are within the "root" of the cloned codebase from earlier steps. Once you are confident you are there, run the following command to install project dependencies
  - `npm install`

# Running the application

In order to run the application, you will actually need to run TWO commands simultaneously. The first command will be responsible for running our mock API that is used to supply the data our application needs. The second command is used to run the application using Webpack - which bundles our Javascript and serves it up on localhost along with our markup and styles

## **Run the API**

- In your current terminal / command prompt run the following command to start up the mock API
  - `npm run server`

## **Run the App**

- Next, open up a SECOND command prompt window
  - Use command prompt commands to navigate into the root of your project
  - Run the following command:
  - `npm run start`

If all has gone well, you should now see the application running in your browser! If it doesn't happen automatically, navigate to `http://localhost:8080/` in a browser to see the application running!

<br>

# Additional Notes

## **Where to start your development**

- If the codebase feels a bit daunting, it is safe to assume that most (if not all) of your changes will take place inside of the `/assets`, `/components`, `/services`, `/styles`, and `/utils` folders, and within the main `index.js` and `index.html` files. You shouldn't need to worry about working with the other files unless you have knowledge beyond the scope of the challenge and want to showcase additional skills to the interviewer.

## **Stopping the Server / App**

- If you ever want to `kill` the API server and/or the App all you need to do is press `Ctrl + c` inside of the terminal / command prompt
