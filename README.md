# My Finished Product
![Credera Website Snapshot](/images/Credera%20Website%20Snapshot.PNG)


# Getting started!
## **Establishing your development environment**

- Download and install your preferred code editor (we recommend Visual Studio Code! https://code.visualstudio.com/)
- Download and install node.js (Node + npm will be used as our package manager for our code dependencies)
  - Download/Install the LTS version here https://nodejs.org/en/download/
  - Open a terminal (Mac) or command prompt (Windows) and type `npm` - You should be presented with a version # (if not, then you might need to troubleshoot!)
- Download and install `git`
  - See install instructions here: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## **Installing Dependencies**

- Run the following command (in the "root" of your cloned code base) to install project dependencies
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

## **Stopping the Server / App**

- To `kill` the API server and/or the App all you need to do is press `Ctrl + c` inside of the terminal / command prompt
