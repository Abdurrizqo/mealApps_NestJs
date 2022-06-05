import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {ClearOutlined} from '@ant-design/icons';
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

    if(resultSearch == null){
        return(
            <div className="my-40 text-center">
                <ClearOutlined style={{fontSize:"80px", color: "#f1f1f1"}}/>
                <h1 className="mt-4 text-xl font-bold">Nothing Found</h1>
                <p className="text-lg">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
            </div>
        )
    }
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