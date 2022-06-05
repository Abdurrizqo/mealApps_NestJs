import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function SearchResult(){
    const [resultSearch, setResultSearch] =useState([]);
    const router = useRouter();
    const {result} = router.query;

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${result}`)
        .then((res) => {
            setResultSearch(res.data.meals);
        })
        .catch((err) => {console.log(err)});
    },[result]);

    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {resultSearch ? resultSearch.map((index) => {
          return(
          <Card key={index.idMeal} indexMeal={index}/>
          )
        }) : <></>}
        </div>
    )
}