import { useRouter } from "next/router";
import axios from "axios";
import {ClearOutlined} from '@ant-design/icons';
import Card from "../../components/Card/Card";


export default function Countries({resFetchcountrie}){
    const router = useRouter();
    const {countries} = router.query;
    if(!resFetchcountrie){
        return(
            <div className="my-40 text-center">
                <ClearOutlined style={{fontSize:"80px", color: "#f1f1f1"}}/>
                <h1 className="mt-4 text-xl font-bold">Nothing Found</h1>
                <p className="text-lg">Sorry, but recipe you search is nothing. Please try again with other recipes.</p>
            </div>
        )
    }
    return(
        <div>
            <h1 className="text-xl font-semibold">Filter By {countries}</h1>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {resFetchcountrie.map((index) => {
          return(
            <Card key={index.idMeal} indexMeal={index}/>
          )
        })}
            </div>
        </div>
    )
}

export async function getStaticPaths(){
    const dataCountries = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const resFetchCountries = dataCountries.data.meals;
    const paths = resFetchCountries.map((index) => ({
        params : {
            countries : index.strArea,
        },
    }));

    return ({
        paths,
        fallback: true
      })
}

export async function getStaticProps(context) {
    const {countries} = context.params
    const meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countries}`);
    const resFetchcountrie = meal.data.meals;

    return{
        props:{
            resFetchcountrie
        }
    }

}