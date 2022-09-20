<h1 align="center">Welcome to Pokemon Monsters 👋</h1>

## 📝 Description

  > The application allows users to discover and browse through all avalable pokemons and also discover other feauters of each pokemons. 

## Core Functionality 

<P>

  I used redux-toolkit to manage the state that is the data i fetched from the pokemon api using axios, which is an object containing the count, next, previous and the result, i grab the data i need using a hook called useSelector, 

  I now passed the data from the App which is the the entry point for Page  to main page as prop,

  the main has the individual card the pagination and search, i passed the data from the app to main page and now passed it to individual component within the main page. 
  
  I passed the data in this format because i realized i need those data within each child component.

  Before i passed the data to Card component i loop through the data to have access to each data after looping through i now passed to card component as prop

  at the card component i wrap the entire card a in Link tag setting it to enpoint so that when a pokemon is clicked it redirect to the PokeInfo Page which which dispay some features such as the species name, moves, weight, types and images of the pokemon the card component only displays the name and image.

  Within the PokeInfo Detailed page i grab the data using the useSelector but i before i use UseParam to the pokemon 
  
  now within the useSelector hook i use find method to get the first name that satify the condition 

  after getting the name i now make an api call to get the data and passed them to element.

  At the pagination i called the fetchPokemon which contains the api call and passed the prop to it so when a button is clicke it shows the next data

  the button of the provious will only show when it has data I implement in this format because i thought it best the show the previous button only when it has data to avoid users from clicking on it when it has no data

</P>

## Functionality Yet To Implement

> I am yet to implement the search functionality

<p>This is because i first break down the task into smaller section and started implementing the core feauters</p>

## Stacks Used

 * <strong> ReactJs: </strong> for creating of the entire application.
 * redux-toolkit : for state management. 
 * react-redux : for binding that is connecting the redux-store to the react app.
 * tailwind.css : for styling.
 * react-router-dom : for routing.
 * axios : for making of api calls.
 * react-spinners : for displaying of the loading spinner

## Features

  * Pagination  
  * Displaying of individual pokemon cards
  * Redirecting to the detailed page of the pokemon when a single pokemon card is clicked


<!-- ### 🏠 [Homepage](https://github.com/yasiramus/pokemon.git) -->
### 🏠 [Homepage](App)

### ✨ [Demo](http://pokemon-eta-black.vercel.app/)

## Available Scripts
<p>In the project directory, you can run:</p>

## Install

<p>will install all the packages used for this project</p>

```sh
npm install
```

## Usage

  <p>Runs the app in the development mode. Open <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> 
    The page will reload when you make changes. You may also see any lint errors in the console.
  </p>

```sh
npm start
```

## Run tests

```sh
npm test
```

## Author

👤 **Yasira Musah**

* Twitter: [@HajjiaYasira](https://twitter.com/HajjiaYasira)
* Github: [@yasiramus](https://github.com/yasiramus)
* LinkedIn: [@yasiramusah](https://linkedin.com/in/yasiramusah)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if this project if you love  it!

Copyright © 2022 [Yasira Musah](https://github.com/yasiramus).