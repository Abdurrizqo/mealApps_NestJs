import { Carousel } from "antd";
import { StarFilled } from "@ant-design/icons";
import Card from "../Card/Card";

export default function PopularMenu() {

  return (
    <>
    <h1 className="text-xl font-bold">Popular Menu</h1>
    <Carousel autoplay draggable={true} dots={false} pauseOnHover={true} className="w-full rounded-md">
      <div className="h-52 shadow sm:h-96">
        <img className="min-w-full rounded-md" src="https://www.themealdb.com/images/media/meals/1529445434.jpg"/>
        <div className="relative top-10 h-1/4 w-full bg-black/50">
          <p className="text-white text-base px-1 pt-1">Chicken Alfredo Primavera</p>
          <p className="text-white">Italian Food</p>
        </div>
      </div>

      <div className="h-52 shadow sm:h-96">
        <img className="min-w-full rounded-md" src="https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg"/>
      </div>

      <div className="h-52 shadow sm:h-96">
        <img className="min-w-full rounded-md" src="https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg"/>
      </div>

      <div className="h-52 shadow sm:h-96">
        <img className="min-w-full rounded-md" src="https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg"/>
      </div>
    </Carousel>
    </>
  );
}
