:star2: Web client for [OMDB API](https://omdbapi.com/) with three pages and local storage persistance.

**React** SPA with **typescript** and **React Router DOM** using **Redux Toolkit** for state management and **RTK Query** for data retrieval. Presentation layer consists of customized **Joy UI** material design library framework extended by **styled-components**. For basic build requirements a minimal **webpack** config has been used.


Currently deployed to [someurl](https://omdbapi.com/)

#####For running locally:
######Prerequisites: 
- Node v16.17.0
- npm v8.15.0\
<sub>tested with above versions</sub>

######Run by executing:
- `npm install`
- `npm start`







<sub>Note:</sub>
<sub>The API key is valid for 1000 requests per day, so if you start getting network errors consistently, it's quite possible the limit has been exceeded. To circumvent this issue for development, the project includes fake api that can be turned on by switching the **isFake** variable in **src/store/apiMovies.ts**</sub>


