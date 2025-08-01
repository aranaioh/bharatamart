import Filterbar from "../components/shop/Filterbar";
import Header from "../components/shop/Header";
import ProductView from "../components/shop/ProductView";

const Shop = () => {
  return (
    <div className="bg-gray-200">

      <div className="w-full p-4 flex justify-between items-center py-2">
        <div>Home / Shop</div>

        <div>Showing 1–12 of 90 results</div>
      </div>

      <div className="w-full md:w-[275px] lg:w-[300px] xl:w-[325px] rounded-lg rounded-md flex md:hidden">
        <Filterbar />
      </div>
      <div className="w-full pt-4 px-4 text-white">
        <Header />
      </div>

      <div className="flex flex-col gap-5 md:flex-row p-4">
        <div className="w-full md:w-[275px] lg:w-[300px] xl:w-[325px] rounded-lg rounded-md md:flex hidden">
          <Filterbar />
        </div>
        <div className="w-full md:w-[calc(100%-275px)] lg:w-[calc(100%-300px)] xl:w-[calc(100%-325px)]">
          <div className="flex justify-between items-center py-3">
            <h2 className="text-xl font-bold">Shop</h2>
            <div>Show
              9
              12
              18
              24</div>
          </div>
          <ProductView />
        </div>
      </div>
    </div>
  );
}

export default Shop;