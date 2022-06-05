import { ClockCircleOutlined, StarFilled } from "@ant-design/icons";
import LazyLoad from 'react-lazyload';

export default function Card({indexMeal}) {
  return (
    <div className="bg-white rounded-md shadow">
      <div className="">
      <LazyLoad>
          <img
            className="rounded-t-md"
            src={indexMeal.strMealThumb}
            alt="..."
          />
        </LazyLoad>
      </div>
      <div className="py-1 px-2">
        <h1 className="text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap">
          {indexMeal.strMeal}
        </h1>
        <h5 className="font-thin text-base mt-2">{indexMeal.strCategory}</h5>
        <div className="flex border-t mt-2 py-2 items-center justify-between">
          <div className=" flex items-center text-gray-500">
            <ClockCircleOutlined className="text-lg" />
            <p className="ml-3 inline-block my-0 p-0">45 Mins</p>
          </div>
          <div>
            <StarFilled style={{ fontSize: '16px', color: '#FAC213' }} />
            <StarFilled style={{ fontSize: '16px', color: '#FAC213' }} />
            <StarFilled style={{ fontSize: '16px', color: '#FAC213' }} />
            <StarFilled style={{ fontSize: '16px', color: '#FAC213' }} />
            <StarFilled style={{ fontSize: '16px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
