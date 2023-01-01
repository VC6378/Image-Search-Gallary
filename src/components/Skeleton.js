import Aos from "aos";

function Skeleton({ item }) {
  return [...Array(item).keys()].map(()=> (
    <div data-aos="fade-down">
    <div className="animate-pulse">
        <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>
    </div>
  ))
}

export default Skeleton