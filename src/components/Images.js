import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Skeleton from "./Skeleton";
import None from "./None";
const Images = () =>{

    const { response, isLoading, searchImage} = useContext(ImageContext);
    return(
        <>
            <h1 className="text-center mt-6 underline text-2xl">Results for {searchImage || 'Coffee'}</h1>
            {isLoading?<div
                className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl mx-auto  px-4"
                > <Skeleton item={30} />
                </div>:
                response && response.length!==0?
                <div
                className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 max-w-7xl mx-auto px-4"
                >
                {response.map((data,key)=>
                   <Image key={key} data={data}/>
                
               )
                }
               </div>
                 :
                <None />}
        </>
    )
}
export default Images;