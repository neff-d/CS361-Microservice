# CS361-Microservice

# Communication Contract for Assignment 9:


A. How to programmatically request data from the microservice:
  * Add the 'MicroServiceServer.js' file to your project's directory
  * In a new terminal, change to the directory that 'MicroServiceServer.js' is located in
  * Type 'node .\MicroServiceServer.js' into the terminal (if using Windows) and press 'Enter'
  * NOTE: The server is running on port 3001 by default; you might have to change that if you're already using port 3001 for something else
  * For the purposes of the video, I used a search box to enter the champion's name so that I could show the output of the 'getChampion()' function.
      I know that you'll be using it a little differently where the champion to be returned is based off the results of your quiz but the function can
      still be used with that in mind. For example, you could make a call to 'getChampion()' by doing something like:

            ```

            <---- Code that calculates quiz results and determines which champion to retrieve ---->

            name = getQuizResults();   ---> return a champion's name based on the results of a fictional
                                                     getQuizResults() function

            champion = getChampion(name);   --->  This will search the champion JSON objects until one of their 'name'
                                                     attributes is matched wth the one provided
    
            ```

B. How to programmatically receive data from the microservice:
  * Make sure that 'MicroServiceServer.js' is already running in a terminal
  * Make sure that the other components of your project are already running
  * Open a web browser, type 'localhost:3001' (or whatever port you are using) and press 'Enter'
  * make a call to 'getChampion()' with the champion you want returned passed in as a parameter
  * 'getChampion()' will return the JSON objects attributes on your web browser opened to 'localhost'


C. UML Sequence Diagram

  |----------------------------|            |----------------------------|          |----------------------------|
  | Your Program running the   |            | Microservice Server        |          | champions.js               |
  | quiz                       |            |                            |          |  (array of JSON objects)   |
  |                            |            |                            |          |                            |
  |----------------------------|            |----------------------------|          |----------------------------|
                |                                          |                                      |
              |---|              'getChampion(name)'     |---|                                    |
              |   |=====================================>|   |                                    |
              |   |                                      |   |               name                 |
              |   |                                      |   |================================> |---|
              |   |                                      |   |                                  |   |
              |   |                                      |   |                                  |   |
              |   |                                      |   |        champion JSON object      |   |
              |   |                                      |   |<---------------------------------|   |
              |   |      champion's JSON attritbutes     |   |                                  |---|
              |   |<-------------------------------------|   |
              |---|                                      |---|
  
