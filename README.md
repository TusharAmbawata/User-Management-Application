User Management Application
A simple User Management Application built with React, providing functionality to view, search, update, and delete user data. This project demonstrates basic state management using React hooks and context, with a search feature integrated in the navbar.

Features
View Users: Displays a list of users in a responsive table format.
Search Users: Search for users by their name, email, username, phone, or website through a search bar in the navigation.
Update User: Button to update user details (functionality can be implemented as needed).
Delete User: Button to delete a user from the list with a confirmation prompt.
Responsive Design: Optimized for both desktop and mobile views with Bootstrap's responsive table.
Technologies Used
React: A JavaScript library for building user interfaces.
React Context API: For state management to handle user data.
Bootstrap: For styling and responsive design.

How It Works
Navbar Search Functionality
Navbar contains a search bar where users can input their search terms.
The search input is passed up to the parent component (App.js), which stores the search term in a state variable (searchTerm).
The searchTerm is then passed down to the HomePage, where it filters the user list based on the search input.
User List in HomePage
The HomePage fetches the user data via the useUser context, which stores all users.
It uses the searchTerm prop to filter users based on their name, email, username, phone, or website.
The table rows are styled with different colors, rotating through predefined Bootstrap classes.
Delete Functionality
Each user row has an "Update" and "Delete" button.
When a user clicks the "Delete" button, the deleteUser function is triggered, asking for confirmation before removing the user from the list.
Future Enhancements
Add User Functionality: The AddNewUser component can be used to add a form/modal for creating new users.
Backend Integration: You can connect this app to a backend using Node.js and MongoDB to persist user data.