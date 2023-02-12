:star2: Web client for [OMDB API](https://omdbapi.com/) with three pages and local storage persistance.

Currently deployed at [mnvmn.github.io/omdb-client](https://mnvmn.github.io/omdb-client) using **Github Actions**.

#### Technical description:
**React** SPA with **Typescript** and **React Router DOM** using **Redux Toolkit** for state management and **RTK Query** for data retrieval. Presentation layer consists of customized **Joy UI** material design library extended with **Styled Components**. For basic build requirements a minimal **Webpack** config has been used. Project includes an asychronously loaded bundle [movie-detail] to demonstrate the concept of code splitting.


#### To run locally:
###### Prerequisites
- Node v16.17.0
- npm v8.15.0
  

<sub>tested with the above versions</sub>


###### Execute cmd
- `npm install`
- `npm start`


#### To run tests:
###### Execute cmd
- `npm test`
  

###### Note
<sub>The API key is valid for 1000 requests per day, so if you start getting network errors consistently, it's quite possible the limit has been exceeded. To circumvent this issue for development, the project includes fake api that can be turned on by setting variable **IS_FAKE_API=true** in **.env** file in root directory</sub>


