import React, { useState } from "react";
import "./App.css";
import HeaderPages from "./components/HeaderPages";
import Confirmation from "./pages/Confirmation";
import Authorization from "./pages/Authorization";
import Template from "./pages/Template";
import PostsList from "./components/PostsList";
import MyPosts from "./pages/MyPosts";
import ContentTitle from "./pages/ContentTitle";
import { ThemeModeProvider } from "./context/themeModeProvider";
import { Theme } from "./context/themeModeContext";
import Information from "./pages/Information";
import Router from "./pages/Router";


// import getCountry from "./common/types";
// import getNumberPeople from "./common/types";
// import sortCountries from "./common/types";
// import getCurrencyName from "./common/types";
// import sortCities from "./common/types";
// import getPopulation from "./common/types";

// import getUserName from "./common/types hw";
// import getCountCar from "./common/types hw";
// import getUsersWithEducation from "./common/types hw";
// import getUsersWithAnimals from "./common/types hw";
// import getUsersCars from "./common/types hw";

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };



  // type Country = {
  //   country: string;
  //   abbreviation: string;
  //   city: string;
  //   currency_name: string;
  //   population: number;
  // };
  
  // type Countries = Array<Country>;
  
  // const countries: Countries = [
  //   {
  //     country: "United Arab Emirates",
  //     abbreviation: "AE",
  //     city: "Abu Dhabi",
  //     currency_name: "Arab Emirates Dirham",
  //     population: 9630959,
  //   },
  //   {
  //     country: "Poland",
  //     abbreviation: "PL",
  //     city: "Warszawa",
  //     currency_name: "Polish Zloty",
  //     population: 37974750,
  //   },
  //   {
  //     country: "Russian Federation",
  //     abbreviation: "RU",
  //     city: "Moscow",
  //     currency_name: "Russian Ruble",
  //     population: 144478050,
  //   },
  // ];

  // type User = {
  //   name: string,
  //   phone:string,
  //   email: string,
  //   animals?: Array<string>,
  //   cars?: Array<string>,
  //   hasChildren: boolean,
  //   hasEducation: boolean,
  // }
  // type Users = Array<User>
  
  // const users:Users = [
  //   {
  //       name: "Harry Felton",
  //       phone: "(09) 897 33 33",
  //       email: "felton@gmail.com",
  //       animals: ["cat"],
  //       cars: ["bmw"],
  //       hasChildren: false,
  //       hasEducation: true
        
  //   },
  //   {
  //       name: "May Sender",
  //       phone: "(09) 117 33 33",
  //       email: "sender22@gmail.com",
  //       hasChildren: true,
  //       hasEducation: true
  //   },
  //   {
  //       name: "Henry Ford",
  //       phone: "(09) 999 93 23",
  //       email: "ford0@gmail.com",
  //       cars: ["bmw", "audi"],
  //       hasChildren: true,
  //       hasEducation: false
  //   }
  // ]

  // console.log(getUsersCars(users));


  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className="App">
        <Router />
        
      </div>
    </ThemeModeProvider>
  );
}

export default App;
