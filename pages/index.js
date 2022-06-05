<<<<<<< HEAD
import axios from "axios";
import Link from "next/link";
import Card from "../components/Card/Card";
import FilterByCountries from "../components/FilterByCountries/FilterByCountries";
import PopularMenu from "../components/PopularMenu/PopularMenu";

export default function Home({resFetchMeals, resFetchCountries}) {
  return (
    <>
      <PopularMenu />
      <FilterByCountries listCountries={resFetchCountries}/>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {resFetchMeals.map((index) => {
          return(
          <Link key={index.idMeal} href={`/${index.idMeal}`}>
            <a><Card indexMeal={index}/></a>
          </Link>
          )
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const dataMeals = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
  const dataCountries = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');

  const resFetchMeals = dataMeals.data.meals;
  const resFetchCountries = dataCountries.data.meals;
  return {
    props: {
      resFetchMeals,
      resFetchCountries 
    }
  }
}
=======
import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}
>>>>>>> 9eb9c4971535842eca2cc4534d9a0a1f91819865
