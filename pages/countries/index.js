import {ClearOutlined} from '@ant-design/icons';
export default function indexCountries(){
    return (
        <div className="my-40 text-center">
            <ClearOutlined style={{fontSize:"80px", color: "#f1f1f1"}}/>
            <h1 className="mt-4 text-xl font-bold">Nothing Found</h1>
            <p className="text-lg">Sorry, but recipe you search is nothing. Please try again with other recipes.</p>
        </div>
    )
}