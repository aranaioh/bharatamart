import MultipleSlider from "../ui/utils/MultipleSlider";

const popularCategories = [
  {
    image: "/home/popular/smart-watch.jpg",
    name: "Power Banks",
    url: "#power-banks"
  },
  {
    image: "/home/popular/watch.jpg",
    name: "Smart Watches",
    url: "#smart-watches"
  },
  {
    image: "/home/popular/watch.jpg",
    name: "Mobile Accessories",
    url: "#mobile-accessories"
  },
  {
    image: "/home/popular/watch.jpg",
    name: "Smart TVs",
    url: "#smart-tvs"
  },
  {
    image: "/home/popular/watch.jpg",
    name: "Clocks",
    url: "#clocks"
  },
  {
    image: "/home/popular/watch.jpg",
    name: "Home Fragrances",
    url: "#home-fragrances"
  },
  {
    image: "/home/popular/watch.jpg",
    name: "Bluetooth Speakers",
    url: "#bluetooth-speakers"
  }
];

const PopularCategory = () => {
  return (
    <div className="w-full bg-white">
      <h2 className="text-[28px] max-sm:text-[20px] font-semibold pt-8 min-md:pt-10 min-md:pb-8 pb-6 " >Popular Categories</h2>
      
      <MultipleSlider products={popularCategories}/>
    </div>
  );
};

export default PopularCategory;