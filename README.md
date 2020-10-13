**LinkUpStudio-Practice-1 <br/>
Educational and technological practice from June 3, 2019 to June 29, 2019**

## **SETTING OBJECTIVES**
In practice, the following tasks were set:
- Develop a site template using cascading style sheets, page markup languages, and javascript programming languages. Customize page elements for adaptive display on the page
- Using HTTP-Request to output internal information from the json file to the page. The page should dynamically change its appearance depending on the contents of the file
- Using the React framework, create your own analogue of the social network with the ability to add and remove posts, as well as dynamically update the appearance of the page

Below are the tasks themselves

### **Task #1:**
Requirements: Make a home page <br/>
Detailed description: <br/>
The page consists of the following sections:
- header (must have a fixed position in the browser window, ie do not change the position relative to the window when scrolling the page)
- search section (should automatically scale to the size of the active window)
- image tile section (image files must have a different aspect ratio, but they must be displayed according to the design)
- section with a slider of responses (the size of a tape of each response should have different length)
- footer

### **Task #2:**
The essence of the task is to display a list of items and divide them into categories, information about each item can be viewed in a modal window <br/>
Explanation of the task
- In the archive there is a file test.json data must be taken from it. The information from this file does not need to be copied, everything should happen dynamically by means of AJAX request
  - General page settings
    - *name* - title of the page
    - *description* - page description
    - *accentColor* - color for all texts
    - *accentColorSecondary* - background color for the page
    - *icon* - icon for the page
  - Categories
    - Categories should be displayed if the parameter `enable_multiple_lists == true`
    - If the parameter `enable_multiple_lists == false` then the categories are hidden, and all items that are - are displayed on the page
    - *Categories* should be tabs
    - If the parameter `active == false`, the category is not displayed
    - *Categories* must be sorted by `positionNumber`
    - The `items` parameter indicates which items belong to this category
  - Items
    - This should be a list of items
    - If categories are active, these items must be linked to categories, with a separate category in a separate tab
    - If the categories are inactive, all items are displayed
    - In the general list you need to use `title`, `description`, and the first image from the array `gallery_images`
    - The list must be sorted by the `position` parameter
- Output modal window
  - After clicking on a separate item in the list - you need to open a modal window with information about this item
  - The information should include the following:
    - `title`
    - `gallery_images` - display as a slider so that you can switch images if there are more than 1
    - `long_description` - display a full description - there are links here, you need to make these links clickable and you can follow them in a separate tab
    - `videoUrl` and `videoTitle`, if these fields are not empty, output the video from YouTube
- The color for the text and the page must be dynamic, ie if you change it in the file tour.json then it must change on the page
- The layout should be *responsive*

### **Task #3:**
Task description: using arbitrary technologies to implement the very basic functionality of Instagram <br/>
The application should include the following functionality:
- View posts (images, number of likes, post description, comments)
- Add posts (upload image. Number of likes and comments can be 'hardcode')
- Delete posts

All data must be downloaded from a remote server <br/>
The link request returns a list of posts as json <br/>
GET https://5b27755162e42b0014915662.mockapi.io/api/v1/posts

Tasks include the following steps:
- Familiarization with the base of practice
- Software installation and setup
- In-depth study of the JavaScript programming language
- Study of the React framework
- Familiarization with HTTPRequest, receiving, processing and sending data, deleting data
- Development of a project based on the topic of creating a prototype social network

## **INSTAGRAM CLONE**
A unfinished instagram clone made in react <br/>
### **Install**
Clone the repo using: `git clone https://github.com/san616mofo/LinkUpStudio-Practice-1.git` <br/>
Go to the folder: `cd LinkUpStudio-Practice-1\task3` <br/>
Install node modules: `yarn install` <br/>
Runs the app in the development mode: `yarn start` <br/>
Launches the test runner in the interactive watch mode: `yarn test` <br/>
Builds the app for production to the build folder: `yarn build`

## **SCREENSHOTS**
### **Task #1:**
<div align="center">
  <img src="https://github.com/san616mofo/LinkUpStudio-Practice-1/blob/master/screenshots/task1/1.png?raw=true" height="300px" alt="task1-img1"/>
  <img src="https://github.com/san616mofo/LinkUpStudio-Practice-1/blob/master/screenshots/task1/2.png?raw=true" height="300px" alt="task1-img2"/>
  <img src="https://github.com/san616mofo/LinkUpStudio-Practice-1/blob/master/screenshots/task1/3.png?raw=true" height="300px" alt="task1-img3"/>
</div>


### **Task #2:**
<div align="center">
  <img src="https://github.com/san616mofo/LinkUpStudio-Practice-1/blob/master/screenshots/task2/1.png?raw=true" height="300px" alt="task2-img1"/>
  <img src="https://github.com/san616mofo/LinkUpStudio-Practice-1/blob/master/screenshots/task2/2.png?raw=true" height="300px" alt="task2-img2"/>
  <img src="https://github.com/san616mofo/LinkUpStudio-Practice-1/blob/master/screenshots/task2/3.png?raw=true" height="300px" alt="task2-img3"/>
</div>

### **Task #3:**
<div align="center">
  <img src="https://github.com/san616mofo/LinkUpStudio-Practice-1/blob/master/screenshots/task3/1.png?raw=true" height="300px" alt="task3-img1"/>
  <img src="https://github.com/san616mofo/LinkUpStudio-Practice-1/blob/master/screenshots/task3/2.png?raw=true" height="300px" alt="task3-img2"/>
</div>
