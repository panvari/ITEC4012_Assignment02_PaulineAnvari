# Netflix Clone - ITEC 4012 - Assignment 02
Created by Pauline Anvari

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description
The website selected for this assignment was www.Netflix.com. Two pages from this website were cloned:

- The homepage
  - Route: '/'
- The sign in page
  - Route: '/sign-in'
 
 The sign in page was selected as the secondary page to clone due to its varying components from the homepage, including the form it features and it's various input elements. Because of the unique components on this page, it was selected to allow for the creation of a variety of components.

## List of Components
Several components were created in order to create an accurate clone of the website.
1. Button

The button component was created because there were multiple places where buttons were used, including in the feature show component, and in the sign in form. The button had an option icon prop, a text prop for the button label, an is disabled prop that could set the button to disabled, and a type prop which determined what styles the button used.

2. Hyperlink

The hyperlink was a simple component that was only created because it was used in multiple places, including the footer and sign in form. The hyperlink had a text prop for the text displayed, a link prop for where the hyperlink led to, and a type prop, which determined what styles the hyperlink used.

3. Thumbnail

The thumbnail was another more simple component, and was created because of how often it is used throughout the site. In fact, it is most likely the most repetive element on the homepage of www.Netflix.com. The thumbnail had an image prop that displays and image of the show, and title prop that's used for the alt text, and an in Netflix original prop that displays a Netflix logo on the thumbnail if it is set to true.

4. Text Input

The text input component was created because it is used multiple times in the sign in form. The text input had a label prop, and a prop for determing the text input type.

5. Show Section

The show section component was create because it appears multiple times on the homepage. There are many elements to it, therefore it was easier to create a component, rather than define each part of the component repeatidly. The component displays the section title and six thumbnail components. The show section has a title prop that defines the title of the section, as well as props to define the child props of each of the six thumbnail components.

6. Feature Show

The feature show component was created because, although it is only used once, the content it displays changes fequently, therefore it made sense to create a resuable component with props that could be updated each time, rather than having to redefine every new element. The feature show has an image prop that determines the background image used for the show, a logo prop that defines the show's logo, and a text prop that defines a description of the show. The component also contains two buttons, primary and secondary.

7. Nav Bar

The nav bar component was created due to its complexitity, and the fact that it appears on all pages on the website once signed in. The nav bar has props for each of the menu items, so the text displayed for each menu item can be easily changed in the parent component incase the names of the pages ever change. The nav bar also features icon buttons, a profile image, and a logout button. Note: there is no logout button in the nav bar of www.Netflix.com, however it was included in the clone to easily navigate between the homepage and sign in component.

8. Footer

Like the nav bar, the footer was created due to the fact that it appears on all pages on the website once signed in. The footer component has no props, and displays a list of hyper link components and some additional text.

9. Sign In Form

The sign in form component was created due to its complexity, and the mutliple child components it contains. The sign in form does not have any props, but features a title, two text input components (type text and type password), a primary coloured button component , a checkbox and label, a hyperlink component, and some additional text and links.

### `npm install`
Downloads a package and it's dependencies. npm install can be run with or without arguments. When run without arguments, npm install downloads dependencies defined in a package. json file and generates a node_modules folder with the installed modules.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
