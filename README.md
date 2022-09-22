<h1 align="center">Welcome to Pokemon Monsters 👋</h1>

## 📝 Description

  > A application which allow users to discover and search through all avalable pokemons with their feauters. 

##  Core Functionality 

  * Pagination  
  * Display of individual pokemon cards
  * Redirecting to the detailed page for pokemon features
  * search for available pokemons
  * Display search results

## Contents

<P>

  > redux-toolkit was used managing the state, That is the data fetched from the pokemon api using axios, which is an object containing the count, next, previous and the result, the data was grab using a hook called useSelector, 

  > Data fwas passed from the store the main page and pokemon Info Page, the main page contains search pokemon component.
  the was passed from the main page to search component as a prop in an destructure format in order for one to have access to the data within the search component.
  
  >filtered through the result data to have access to individual that after filtering check to see if those data are available, if they are return the available data which matches the type word, before returning the available data check to see if the length is less than 3 if it return those data.

  >map the resulted array, passed it to card compoment as prop to have access to those data with the card component, after mapping through dispay the data within the jsx

  > Within the PokeInfo Detailed page i grab the data using the useSelector but i before i use UseParam to get the name and passed it to the fetchPokemonRecord function together with the url in a string template which will dispatch the action within the store. use useSelector to get the data and passed the to the jsx in order to render those data within the interface

  >At the pagination i called the fetchPokemon which contains the api call and passed the prop to it so when a button is clicke it shows the next data
  the button of the provious will only show when it has data I implement in this format because i thought it best the show the previous button only when it has data to avoid users from clicking on it when it has no data

  > Search functionality 

</P>

## Stacks Used

 * <strong> ReactJs: </strong> for creating of the entire application.
 * redux-toolkit : for state management. 
 * react-redux : for binding that is connecting the redux-store to the react app.
 * tailwind.css : for styling.
 * react-router-dom : for routing.
 * axios : for making of api calls.
 * react-spinners : for displaying of the loading spinner


### ✨ [Demo](https://pokemon-eta-black.vercel.app/)

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
