## Languages and Dependencies

![1](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![2](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![3](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![4](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![5](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![6](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![6](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)


# Contact Dashborad and Covid Tracker Chart Prototype
[(CLICK HERE) DEPLOYED -> Netlify URL ](https://clever-crostata-63ce47.netlify.app/)

This is a prototype of a Contact Dashboard with CRUD operations (Creat, read, delete, update) of all contacts possible along with implementation of chart.js for showing covid datas. All of the applications is made with React, Typescript.

## Running the Appliction

This app was made with the help of React/npm CRA (create React application)
- download the zip and extract the file or fork it for the git repo.
- After clonning run the following commands on your zsh or node
    - To install all the dependencies run : ` npm install` or `npm i`
    - Post that run `npm start` or `npm run start`
    - or directly you can visit the deployed netlify site `https://clever-crostata-63ce47.netlify.app/`

## Tech Stack

**Frontend:** HTML, CSS, React.js, APIs, JSON, Redux, Redux-Toolkit, ReactQuery/Tenstack, Chart.js, Typescipt, Tailwind

**Server:** API endpoint is already hoisted. You can check the fetch function inside the code to get the api/apis links which are provided below.

Contacts Redux are maintained in local storage. If you want to change just place your post link of server instead of local storage. 


## Author

- [Arnab Das](https://github.com/arnabdasrishi)


## API Reference

#### World wide data of cases:

To use the system just remove the comments. 

```http
  GET URL- https://disease.sh/v3/covid-19/all
```
Country Specific data of cases:

```http
  GET URL- https://disease.sh/v3/covid-19/countries
```
Graph data for cases with date:

```http
  GET URL- https://disease.sh/v3/covid-19/historical/all?lastdays=all
```

## 🔒 AUTHENTECIATION 

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `string` | **Not Required** |

#### Get item Format

```http
  //Sample Data format.
  //You can aspect this format of data when you pass a get request from the server
  
   {
      "updated": 1682268413968,
      "country": "Afghanistan",
      "countryInfo": {
      "_id": 4,
      "iso2": "AF",
      "iso3": "AFG",
      "lat": 33,
      "long": 65,
      "flag": "https://disease.sh/assets/img/flags/af.png"
      },
      "cases": 214070,
      "todayCases": 11,
      "deaths": 7896,
      "todayDeaths": 0,
      "recovered": 193174,
      "todayRecovered": 30,
      "active": 13000,
      "critical": 45,
      "casesPerOneMillion": 5253,
      "deathsPerOneMillion": 194,
      "tests": 1230035,
      "testsPerOneMillion": 30182,
      "population": 40754388,
      "continent": "Asia",
      "oneCasePerPeople": 190,
      "oneDeathPerPeople": 5161,
      "oneTestPerPeople": 33,
      "activePerOneMillion": 318.98,
      "recoveredPerOneMillion": 4739.96,
      "criticalPerOneMillion": 1.1
    },
```

## CSS and UI

Tailwind CSS is used to make this project.

Responsiveness work is in progress. For now at the alpha release stage it is not responsive.

### Screenshots

![1](https://i.ibb.co/47X7fMf/1.png)
![1](https://i.ibb.co/8rTD87s/addnew.png)
![1](https://i.ibb.co/W36qvGP/chart1.png)
![1](https://i.ibb.co/8mz5Sv6/chart2.png)

# Feedback

If you have any feedback, please reach out to arnabdasrishi@gmail.com

### 🙂 Thank You and have a nice day 🙏



