import {FlagOutlined, StarFilled, TagOutlined, TagTwoTone } from "@ant-design/icons";
export default function IngredientTag({detail}){
    let pattern = /strMeasure/i;
    let pattern2 = /strIngredient/i;
    let ingredient = [];
    let measure = [];
    let strIngredient=[];

    for (const key in detail) {
        let tesKey= key.match(pattern);
        let tesKey2 = key.match(pattern2);
        if(tesKey){
            if(detail[key] && detail[key].length > 0){
                measure.push(detail[key])
            }
        }
        if(tesKey2){
            if(detail[key] && detail[key].length > 0){
                ingredient.push(detail[key])
            }
        }
    }
    for(let i = 0; i<20; i++){
        strIngredient.push(measure[i]+" "+ingredient[i])
    }

    return(
        <>
        <div className="flex py-2 flex-wrap">
            {strIngredient.map((index, key) => {
                return(
                    <div key={key} className="border rounded-full px-4 text-base py-1 mr-2 mb-2">{index}</div>
                )
            })}
        </div>
        </>     
    )
}