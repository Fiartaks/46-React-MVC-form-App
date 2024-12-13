# 🗣️ MVC Form Application

## 📖 Project Overview
🌍 The application follows the MVC (Model-View-Controller) architecture, ensuring a clear separation of concerns. 
🌍This Forum Application allows users to create and view posts. It is built using React, with a focus on modularity and reusability. Users can add new posts and view existing ones, fostering a community-driven environment. 


## 📸 Screenshots 📸

![mvc.gif](https://github.com/Fiartaks/46-React-MVC-form-App/blob/main/mvc/public/mvc.gif)


## 💻 What’s in the Project?
- 🌟 **Main Component (App.jsx)**: The main entry point of the application, setting up routes for listing and adding posts.  
- 🔗 **Axios Instance (constants.js)**: Configures Axios for making HTTP requests to the local backend.  
- 🛠️ **Header Component (Header.jsx)**: Displays the app title and navigation links to different routes.  
- 📋 **List Posts Controller (ListPostController.jsx)**: Handles the fetching and displaying of posts, including user interaction with posts.  
- ➕ **Add Post Controller (AddPostController.jsx)**: Manages the form for adding new posts and handles submission logic.  
- 📄 **Popup Controller (PopupController.jsx)**: Displays additional information about the posts in a popup view when the username is clicked.  

## 🏗️ MVC Characteristics

### 1. Model
- **Data Representation**: The AddPostModel class is used to define the structure of a post (including fields like `id`, date, user, title, and text).
- **State Management**: Contains functionality for initializing and managing the state of post data.

### 2. View
- **User Interface**: Components such as AddPostView, ListPostView, and Header are designed to display the user interface to the users. They present the data to the user and capture user input.
- **CSS Styling**: Styles are organized in SCSS files to enhance the appearance of the application.

### 3. Controller
- **Business Logic**: Controllers like ListPostController and AddPostController handle user actions, update the model, and coordinate responses between the model and view.
- **Data Fetching**: Use of Axios within controllers to interact with a backend API, fetching and posting data as needed.

## 🛠️ What Has Been Done in the Project?
- 🔄 Implemented functionality to add new posts.  
- 📥 Displayed posts dynamically by fetching data from the backend.  
- 📚 Incorporated a popup to view detailed information about posts based on the selected user.  
- 🖌️ Designed user interfaces using SCSS for better styling and responsiveness.  

## 📦 Libraries
- 📘 React  
- 🌐 React Router  
- 📦 Axios  
- 🎨 SCSS  

