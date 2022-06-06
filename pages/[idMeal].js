import axios from "axios";
import { useRouter } from "next/router";
import {FlagOutlined, StarFilled, TagOutlined, ClearOutlined } from "@ant-design/icons";
import { useState } from "react";
import IngredientTag from '../components/DetailTag/IngredientTag'
import InstructionsTag from "../components/InstructionsTag/InstructionsTag";
import VideoTag from "../components/VideoTag/VideoTag";

export default function DetailMeal({resFetchMeal}){
    const router = useRouter();
    const {idMeal} = router.query;
    const [activeStatus, setActiveStatus] = useState("detail");

    const isActive = (e)=> {
        setActiveStatus(e.target.id);
    }

    if(!resFetchMeal){
        return(
            <div className="my-40 text-center">
                <ClearOutlined style={{fontSize:"80px", color: "#f1f1f1"}}/>
                <h1 className="mt-4 text-xl font-bold">Nothing Found</h1>
                <p className="text-lg">Sorry, but recipe you search is nothing. Please try again with other recipes.</p>
            </div>
        )
    }

    return(
        <div className="w-11/12 md:w-3/4 mx-auto rounded bg-white shadow-md py-10">
            <div>
                <img className="w-40 md:w-52 lg:w-60 m-auto rounded-md shadow-lg" src={resFetchMeal[0].strMealThumb} alt="..."/>
                <div className="mt-3">
                    <h1 className="text-center">{resFetchMeal[0].strMeal}</h1>
                    <div className="flex w-full px-12 justify-center">
                            <div className="flex items-center">
                                <FlagOutlined/>
                                <div className="pl-2">{resFetchMeal[0].strArea}</div>
                            </div>
                            <div className="flex items-center px-8 md:px-11">
                                <TagOutlined/>
                                <div className="pl-2">{resFetchMeal[0].strCategory}</div>
                            </div>

                            <div className="flex items-center">
                                <StarFilled style={{ fontSize: '16px', color: '#FAC213' }} />
                                <StarFilled style={{ fontSize: '16px', color: '#FAC213' }} />
                                <StarFilled style={{ fontSize: '16px', color: '#FAC213' }} />
                                <StarFilled style={{ fontSize: '16px', color: '#FAC213' }} />
                                <StarFilled style={{ fontSize: '16px' }} />
                            </div>
                        </div>
                </div>

                <div className="mt-6 w-full">                    
                    <div className="flex w-full px-6 justify-center text-base">
                        <h3 className={`cursor-pointer ${activeStatus==='detail' ? "text-[#EC994B]" : ""}`} onClick={isActive} id="detail">Ingredient</h3>
                        <h3 className={`px-8 sm:px-16 cursor-pointer ${activeStatus==='instructions' ? "text-[#EC994B]" : ""}`} onClick={isActive} id="instructions">Instructions</h3>
                        <h3 className={`cursor-pointer ${activeStatus==='video' ? "text-[#EC994B]" : ""}`} onClick={isActive} id="video">Video</h3>
                    </div>
                    <div className="border-t-2 border-[#EC994B] mx-4">
                    {activeStatus === "detail" ? <IngredientTag detail={resFetchMeal[0]}/> : <></>}
                    {activeStatus === "instructions" ? <InstructionsTag instruction={resFetchMeal[0].strInstructions}/> : <></>}
                    {activeStatus === "video" ? <VideoTag vid={resFetchMeal[0].strYoutube}/> : <></>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths(){
    const dataMeals = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    const resFetchMeals = dataMeals.data.meals;
    const paths = resFetchMeals.map((index) => ({
        params : {
            idMeal : index.idMeal,
        },
    }));

    return ({
        paths,
        fallback: true
      })
}

export async function getStaticProps(context) {
    const {idMeal} = context.params
    const meal = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const resFetchMeal = meal.data.meals;

    return{
        props:{
            resFetchMeal
        }
    }

}