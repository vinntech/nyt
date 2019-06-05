
### NYT Times Most Popular Articles

This is responsive web app using react and Material UI to fetch articles from NYT web api. 
It contains following ui parts.

1.) Header Part - 

    Top left Menu Icon - If you click on it, it will redirect to main page.

    Title - Title will be 'NY Times Most Popular'

    Search Input - Not implemented

2.) Main body area where routed page will be rendered.

3.) There are two screens

    1.) List of articles fetched from NYT web api.

    2.) Detail of selected article -> When user click on [Right Arrow icon] 
        at the right of item from List of Articles screen.

4.) User can come on main screen by clicking on Top left menu icon at the header part.

---

### Main Tools, Library, IDE used

1.) Visual Studio Code

2.) React

3.) Material UI

---

### `Getting start - Follow the steps to run the web app`

1.) Clone the git repository by following git command on Visual Studio Code Terminal.

#### Command: git clone https://github.com/vinntech/nyt.git

> I have sent you in mail.

2.) It will create nyt directory, go to nyt directory.

3.) Run following command to install NPM dependencies

#### Command: npm install

---

4.) Set NYT api key

Go to config.json file in src folder and set your api-key [nytApiKey=your api key]

>Note - You can also use api key which I have given already in config.json and skip this point. 
Cross fingers, it should work.

5.) Run following command to start the app.

#### Command:  npm start

---

### `Lets do testing`

1.) Run the following command to test the app.


#### Command: npm run test --watchAll=false

>Please follow the instruction if it shows this message 'No tests found related to files changed since last commit.' 
Press 'a' to run all tests.

---

### `Lets take it out App coverage report`

1.) Run the following command to take the coverage report of the app. Press 'q' to quit from previous command.

#### Command: npm run coverage --watchAll=false


Please follow the below instruction if it shows this messages 'No tests found related to files changed since last commit.'

Open following files.

    
    1.) src\components\App.js

    2.) src\components\appbar\AppHeader.js

    3.) src\components\articles\MostPopularArticles.Controller.js

    4.) src\components\articles\MostPopularArticles.View.js

    5.) src\components\article-detail\MostPopularItemDetail.Controller.js

    6.) src\components\article-detail\MostPopularItemDetail.View.js

    7.) src\services\nyt.service.js

>Remove this line '/* Remote it for coverage report */' at the bottom from each file and save it. 
Its just to make any change in each file to generate coverage report. And now run the same command given above.

---

