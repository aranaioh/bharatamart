import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader } from "@/components/ui/sheet";
import { FilterAccordion, FilterAccordionContent, FilterAccordionItem, FilterAccordionTrigger } from "@/components/ui/filter-accordion";
import { SlidersHorizontal, X } from "lucide-react";

const FilterDrawer = ({ onFiltersChange }) => {
  const maxLimit = 10000;
  const [priceRange, setPriceRange] = useState([200, maxLimit]);
  const [minPrice, setMinPrice] = useState("200");
  const [maxPrice, setMaxPrice] = useState(maxLimit.toString());
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [selectedProductSubTypes, setSelectedProductSubTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [openItems, setOpenItems] = useState(["price-range"]);

  // Sample data
  const categoryOptions = ["Fashion", "Electronics", "Home & Decor", "Televisions"];
  const subCategoryOptions = ["Casual Wear", "Formal Wear", "Bluetooth Headphones", "Mobile Accessories", "Wall Art", "Smart TV"];
  const brandOptions = ["Samsung", "Apple", "Nike", "Adidas", "Puma", "Sony", "LG", "Philips", "Boat", "JBL", "Mi", "OnePlus", "Realme", "Oppo", "Vivo"];
  const productTypeOptions = ["Clothing", "Accessories", "Electronics", "Home Appliances", "Sports", "Beauty"];
  const productSubTypeOptions = ["T-Shirts", "Jeans", "Shoes", "Bags", "Watches", "Headphones", "Speakers", "Lamps", "Cushions"];
  const sizeOptions = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large", "free"];

  const handleSliderChange = (value) => {
    const [min, max] = value;
    const constrainedMin = Math.min(min, max);
    const constrainedMax = Math.max(min, max);
    
    setPriceRange([constrainedMin, constrainedMax]);
    setMinPrice(constrainedMin.toString());
    setMaxPrice(constrainedMax.toString());
  };

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value) || 200;
    const constrainedValue = Math.max(0, Math.min(value, maxLimit));
    setMinPrice(constrainedValue.toString());
    
    const newMax = Math.max(constrainedValue, priceRange[1]);
    setPriceRange([constrainedValue, newMax]);
    if (newMax !== priceRange[1]) {
      setMaxPrice(newMax.toString());
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value) || maxLimit;
    const constrainedValue = Math.max(0, Math.min(value, maxLimit));
    setMaxPrice(constrainedValue.toString());
    
    const newMin = Math.min(constrainedValue, priceRange[0]);
    setPriceRange([newMin, constrainedValue]);
    if (newMin !== priceRange[0]) {
      setMinPrice(newMin.toString());
    }
  };

  const handleMultiSelect = (value, setter) => {
    setter(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    const filters = {
      priceRange,
      gender: selectedGender,
      category: selectedCategories,
      subCategory: selectedSubCategories,
      brand: selectedBrands,
      productType: selectedProductTypes,
      productSubType: selectedProductSubTypes,
      size: selectedSizes
    };
    onFiltersChange?.(filters);
  };

  const clearFilters = () => {
    setPriceRange([200, maxLimit]);
    setMinPrice("200");
    setMaxPrice(maxLimit.toString());
    setSelectedGender("");
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setSelectedBrands([]);
    setSelectedProductTypes([]);
    setSelectedProductSubTypes([]);
    setSelectedSizes([]);
  };

  const handleAccordionChange = (value) => {
    setOpenItems(value);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[350px] sm:w-[400px] overflow-y-auto">
        <SheetHeader className="flex flex-row items-center justify-between">
          <h2 className="text-lg font-semibold">Filter Products</h2>
          <SheetClose asChild>
            <Button variant="ghost" size="md">
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
        </SheetHeader>

        <div className="space-y-4 mt-6">
          <FilterAccordion
            type="multiple"
            className="w-full"
            openItems={openItems}
            onOpenChange={handleAccordionChange}
          >
            {/* Price Range */}
            <FilterAccordionItem value="price-range">
              <FilterAccordionTrigger className="text-sm font-medium">
                Price Range
              </FilterAccordionTrigger>
              <FilterAccordionContent>
                <div className="space-y-3 ">
                  <Slider
                    value={priceRange}
                    onValueChange={handleSliderChange}
                    max={maxLimit}
                    min={200}
                    step={100}
                    className="w-full py-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>₹200</span>
                    <span>₹{maxLimit}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="min-price" className="text-sm">Min Price</Label>
                      <Input
                        id="min-price"
                        type="number"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        min="200"
                        max={maxLimit}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="max-price" className="text-sm">Max Price</Label>
                      <Input
                        id="max-price"
                        type="number"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        min="200"
                        max={maxLimit}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </FilterAccordionContent>
            </FilterAccordionItem>

            {/* Gender */}
            <FilterAccordionItem value="gender">
              <FilterAccordionTrigger className="text-sm font-medium">Gender</FilterAccordionTrigger>
              <FilterAccordionContent>
                <RadioGroup value={selectedGender} onValueChange={setSelectedGender}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="men" id="gender-men" />
                      <Label htmlFor="gender-men" className="text-sm cursor-pointer">Men</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="women" id="gender-women" />
                      <Label htmlFor="gender-women" className="text-sm cursor-pointer">Women</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unisex" id="gender-unisex" />
                      <Label htmlFor="gender-unisex" className="text-sm cursor-pointer">Unisex</Label>
                    </div>
                  </div>
                </RadioGroup>
              </FilterAccordionContent>
            </FilterAccordionItem>

            {/* Category */}
            <FilterAccordionItem value="category">
              <FilterAccordionTrigger className="text-sm font-medium">Category</FilterAccordionTrigger>
              <FilterAccordionContent>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {categoryOptions.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleMultiSelect(category, setSelectedCategories)}
                      />
                      <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </FilterAccordionContent>
            </FilterAccordionItem>

            {/* Sub Category */}
            <FilterAccordionItem value="subcategory">
              <FilterAccordionTrigger className="text-sm font-medium">Sub Category</FilterAccordionTrigger>
              <FilterAccordionContent>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {subCategoryOptions.map((subCategory) => (
                    <div key={subCategory} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`subcategory-${subCategory}`}
                        checked={selectedSubCategories.includes(subCategory)}
                        onCheckedChange={() => handleMultiSelect(subCategory, setSelectedSubCategories)}
                      />
                      <Label htmlFor={`subcategory-${subCategory}`} className="text-sm cursor-pointer">
                        {subCategory}
                      </Label>
                    </div>
                  ))}
                </div>
              </FilterAccordionContent>
            </FilterAccordionItem>

            {/* Brand */}
            <FilterAccordionItem value="brand">
              <FilterAccordionTrigger className="text-sm font-medium">Brand</FilterAccordionTrigger>
              <FilterAccordionContent>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {brandOptions.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleMultiSelect(brand, setSelectedBrands)}
                      />
                      <Label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </FilterAccordionContent>
            </FilterAccordionItem>

            {/* Product Type */}
            <FilterAccordionItem value="product-type">
              <FilterAccordionTrigger className="text-sm font-medium">Product Type</FilterAccordionTrigger>
              <FilterAccordionContent>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {productTypeOptions.map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`product-type-${type}`}
                        checked={selectedProductTypes.includes(type)}
                        onCheckedChange={() => handleMultiSelect(type, setSelectedProductTypes)}
                      />
                      <Label htmlFor={`product-type-${type}`} className="text-sm cursor-pointer">
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </FilterAccordionContent>
            </FilterAccordionItem>

            {/* Product Sub Type */}
            <FilterAccordionItem value="product-subtype">
              <FilterAccordionTrigger className="text-sm font-medium">Product Sub Type</FilterAccordionTrigger>
              <FilterAccordionContent>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {productSubTypeOptions.map((subType) => (
                    <div key={subType} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`product-subtype-${subType}`}
                        checked={selectedProductSubTypes.includes(subType)}
                        onCheckedChange={() => handleMultiSelect(subType, setSelectedProductSubTypes)}
                      />
                      <Label htmlFor={`product-subtype-${subType}`} className="text-sm cursor-pointer">
                        {subType}
                      </Label>
                    </div>
                  ))}
                </div>
              </FilterAccordionContent>
            </FilterAccordionItem>

            {/* Size */}
            <FilterAccordionItem value="size">
              <FilterAccordionTrigger className="text-sm font-medium">Size</FilterAccordionTrigger>
              <FilterAccordionContent>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {sizeOptions.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`size-${size}`}
                        checked={selectedSizes.includes(size)}
                        onCheckedChange={() => handleMultiSelect(size, setSelectedSizes)}
                      />
                      <Label htmlFor={`size-${size}`} className="text-sm cursor-pointer">
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </FilterAccordionContent>
            </FilterAccordionItem>
          </FilterAccordion>

          <div className="flex gap-3 pt-4">
            <Button onClick={clearFilters} variant="outline" className="flex-1 bg-red-400">
              Clear All
            </Button>
            <Button onClick={applyFilters} variant="outline" className="flex-1 bg-green-400">
              Apply Filters
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterDrawer;

// import { useState } from "react";
// import { Slider } from "@/components/ui/slider";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader } from "@/components/ui/sheet";
// import { FilterAccordion, FilterAccordionContent, FilterAccordionItem, FilterAccordionTrigger } from "@/components/ui/filter-accordion";
// import { SlidersHorizontal, X } from "lucide-react";

// const FilterDrawer = ({ onFiltersChange }) => {
//   const maxLimit = 10000;
  
//   // State for all filters based on backend model
//   const [priceRange, setPriceRange] = useState([200, maxLimit]);
//   const [minPrice, setMinPrice] = useState("200");
//   const [maxPrice, setMaxPrice] = useState(maxLimit.toString());
//   const [selectedGender, setSelectedGender] = useState("");
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedSubCategories, setSelectedSubCategories] = useState([]);
//   const [selectedBrands, setSelectedBrands] = useState([]);
//   const [selectedProductTypes, setSelectedProductTypes] = useState([]);
//   const [selectedProductSubTypes, setSelectedProductSubTypes] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);

//   // Sample data based on your backend model
//   const categoryOptions = ["Fashion", "Electronics", "Home & Decor", "Televisions"];
//   const subCategoryOptions = ["Casual Wear", "Formal Wear", "Bluetooth Headphones", "Mobile Accessories", "Wall Art", "Smart TV"];
//   const brandOptions = ["Samsung", "Apple", "Nike", "Adidas", "Puma", "Sony", "LG", "Philips", "Boat", "JBL", "Mi", "OnePlus", "Realme", "Oppo", "Vivo"];
//   const productTypeOptions = ["Clothing", "Accessories", "Electronics", "Home Appliances", "Sports", "Beauty"];
//   const productSubTypeOptions = ["T-Shirts", "Jeans", "Shoes", "Bags", "Watches", "Headphones", "Speakers", "Lamps", "Cushions"];
//   const sizeOptions = ["S", "M", "L", "XL", "XXL", "XXXL", "XXXXL", "small", "medium", "large", "x-large", "xx-large", "xxx-large", "xxxx-large", "free"];

//   const handleSliderChange = (value) => {
//     const [min, max] = value;
//     const constrainedMin = Math.min(min, max);
//     const constrainedMax = Math.max(min, max);
    
//     setPriceRange([constrainedMin, constrainedMax]);
//     setMinPrice(constrainedMin.toString());
//     setMaxPrice(constrainedMax.toString());
//   };

//   const handleMinPriceChange = (e) => {
//     const value = parseInt(e.target.value) || 200;
//     const constrainedValue = Math.max(0, Math.min(value, maxLimit));
//     setMinPrice(constrainedValue.toString());
    
//     const newMax = Math.max(constrainedValue, priceRange[1]);
//     setPriceRange([constrainedValue, newMax]);
//     if (newMax !== priceRange[1]) {
//       setMaxPrice(newMax.toString());
//     }
//   };

//   const handleMaxPriceChange = (e) => {
//     const value = parseInt(e.target.value) || maxLimit;
//     const constrainedValue = Math.max(0, Math.min(value, maxLimit));
//     setMaxPrice(constrainedValue.toString());
    
//     const newMin = Math.min(constrainedValue, priceRange[0]);
//     setPriceRange([newMin, constrainedValue]);
//     if (newMin !== priceRange[0]) {
//       setMinPrice(newMin.toString());
//     }
//   };

//   const handleMultiSelect = (value, setter) => {
//     setter(prev => 
//       prev.includes(value) 
//         ? prev.filter(item => item !== value)
//         : [...prev, value]
//     );
//   };

//   const applyFilters = () => {
//     const filters = {
//       priceRange,
//       gender: selectedGender,
//       category: selectedCategories,
//       subCategory: selectedSubCategories,
//       brand: selectedBrands,
//       productType: selectedProductTypes,
//       productSubType: selectedProductSubTypes,
//       size: selectedSizes
//     };
//     onFiltersChange?.(filters);
//   };

//   const clearFilters = () => {
//     setPriceRange([200, maxLimit]);
//     setMinPrice("200");
//     setMaxPrice(maxLimit.toString());
//     setSelectedGender("");
//     setSelectedCategories([]);
//     setSelectedSubCategories([]);
//     setSelectedBrands([]);
//     setSelectedProductTypes([]);
//     setSelectedProductSubTypes([]);
//     setSelectedSizes([]);
//   };

//   // Accordion open state for closable/toggleable sections
//   const [openItems, setOpenItems] = useState([
//     // Optionally, set default open items here, e.g. 'price-range'
//   ]);

//   const handleAccordionChange = (value) => {
//     setOpenItems(value);
//   };

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline" className="flex items-center gap-2">
//           <SlidersHorizontal className="h-4 w-4" />
//           Filters
//         </Button>
//       </SheetTrigger>
//       <SheetContent side="left" className="w-[350px] sm:w-[400px] overflow-y-auto">
//         <SheetHeader className="flex flex-row items-center justify-between">
//           <h2 className="text-lg font-semibold">Filter Products</h2>
//           <SheetClose asChild>
//             <Button variant="ghost" size="sm">
//               <X className="h-4 w-4" />
//             </Button>
//           </SheetClose>
//         </SheetHeader>

//         <div className="space-y-4 mt-6">
//           <FilterAccordion
//             type="multiple"
//             className="w-full"
//             open={openItems}
//             onOpenChange={handleAccordionChange}
//           >
//             {/* Price Range */}
//             <FilterAccordionItem value="price-range">
//               <FilterAccordionTrigger className="text-sm font-medium">Price Range</FilterAccordionTrigger>
//               <FilterAccordionContent>
//                 <div className="space-y-3">
//                   <Label className="text-sm">
//                     ₹{priceRange[0]} - ₹{priceRange[1]}
//                   </Label>
//                   <Slider
//                     value={priceRange}
//                     onValueChange={handleSliderChange}
//                     max={maxLimit}
//                     min={200}
//                     step={100}
//                     className="w-full"
//                   />
//                   <div className="flex justify-between text-xs text-muted-foreground">
//                     <span>₹200</span>
//                     <span>₹{maxLimit}</span>
//                   </div>
//                   <div className="grid grid-cols-2 gap-3">
//                     <div>
//                       <Label htmlFor="min-price" className="text-sm">Min Price</Label>
//                       <Input
//                         id="min-price"
//                         type="number"
//                         value={minPrice}
//                         onChange={handleMinPriceChange}
//                         min="200"
//                         max={maxLimit}
//                         className="mt-1"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="max-price" className="text-sm">Max Price</Label>
//                       <Input
//                         id="max-price"
//                         type="number"
//                         value={maxPrice}
//                         onChange={handleMaxPriceChange}
//                         min="200"
//                         max={maxLimit}
//                         className="mt-1"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </FilterAccordionContent>
//             </FilterAccordionItem>

//             {/* Gender */}
//             <FilterAccordionItem value="gender">
//               <FilterAccordionTrigger className="text-sm font-medium">Gender</FilterAccordionTrigger>
//               <FilterAccordionContent>
//                 <RadioGroup value={selectedGender} onValueChange={setSelectedGender}>
//                   <div className="space-y-2">
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="men" id="gender-men" />
//                       <Label htmlFor="gender-men" className="text-sm cursor-pointer">Men</Label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="women" id="gender-women" />
//                       <Label htmlFor="gender-women" className="text-sm cursor-pointer">Women</Label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="unisex" id="gender-unisex" />
//                       <Label htmlFor="gender-unisex" className="text-sm cursor-pointer">Unisex</Label>
//                     </div>
//                   </div>
//                 </RadioGroup>
//               </FilterAccordionContent>
//             </FilterAccordionItem>

//             {/* Category */}
//             <FilterAccordionItem value="category">
//               <FilterAccordionTrigger className="text-sm font-medium">Category</FilterAccordionTrigger>
//               <FilterAccordionContent>
//                 <div className="space-y-2 max-h-32 overflow-y-auto">
//                   {categoryOptions.map((category) => (
//                     <div key={category} className="flex items-center space-x-2">
//                       <Checkbox 
//                         id={`category-${category}`}
//                         checked={selectedCategories.includes(category)}
//                         onCheckedChange={() => handleMultiSelect(category, setSelectedCategories)}
//                       />
//                       <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
//                         {category}
//                       </Label>
//                     </div>
//                   ))}
//                 </div>
//               </FilterAccordionContent>
//             </FilterAccordionItem>

//             {/* Sub Category */}
//             <FilterAccordionItem value="subcategory">
//               <FilterAccordionTrigger className="text-sm font-medium">Sub Category</FilterAccordionTrigger>
//               <FilterAccordionContent>
//                 <div className="space-y-2 max-h-32 overflow-y-auto">
//                   {subCategoryOptions.map((subCategory) => (
//                     <div key={subCategory} className="flex items-center space-x-2">
//                       <Checkbox 
//                         id={`subcategory-${subCategory}`}
//                         checked={selectedSubCategories.includes(subCategory)}
//                         onCheckedChange={() => handleMultiSelect(subCategory, setSelectedSubCategories)}
//                       />
//                       <Label htmlFor={`subcategory-${subCategory}`} className="text-sm cursor-pointer">
//                         {subCategory}
//                       </Label>
//                     </div>
//                   ))}
//                                   </div>
//                 </FilterAccordionContent>
//               </FilterAccordionItem>

//               {/* Brand */}
//               <FilterAccordionItem value="brand">
//                 <FilterAccordionTrigger className="text-sm font-medium">Brand</FilterAccordionTrigger>
//                 <FilterAccordionContent>
//                 <div className="space-y-2 max-h-32 overflow-y-auto">
//                   {brandOptions.map((brand) => (
//                     <div key={brand} className="flex items-center space-x-2">
//                       <Checkbox 
//                         id={`brand-${brand}`}
//                         checked={selectedBrands.includes(brand)}
//                         onCheckedChange={() => handleMultiSelect(brand, setSelectedBrands)}
//                       />
//                       <Label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
//                         {brand}
//                       </Label>
//                     </div>
//                   ))}
//                                   </div>
//                 </FilterAccordionContent>
//               </FilterAccordionItem>

//               {/* Product Type */}
//               <FilterAccordionItem value="product-type">
//                 <FilterAccordionTrigger className="text-sm font-medium">Product Type</FilterAccordionTrigger>
//                 <FilterAccordionContent>
//                 <div className="space-y-2 max-h-32 overflow-y-auto">
//                   {productTypeOptions.map((type) => (
//                     <div key={type} className="flex items-center space-x-2">
//                       <Checkbox 
//                         id={`product-type-${type}`}
//                         checked={selectedProductTypes.includes(type)}
//                         onCheckedChange={() => handleMultiSelect(type, setSelectedProductTypes)}
//                       />
//                       <Label htmlFor={`product-type-${type}`} className="text-sm cursor-pointer">
//                         {type}
//                       </Label>
//                     </div>
//                   ))}
//                                   </div>
//                 </FilterAccordionContent>
//               </FilterAccordionItem>

//               {/* Product Sub Type */}
//               <FilterAccordionItem value="product-subtype">
//                 <FilterAccordionTrigger className="text-sm font-medium">Product Sub Type</FilterAccordionTrigger>
//                 <FilterAccordionContent>
//                 <div className="space-y-2 max-h-32 overflow-y-auto">
//                   {productSubTypeOptions.map((subType) => (
//                     <div key={subType} className="flex items-center space-x-2">
//                       <Checkbox 
//                         id={`product-subtype-${subType}`}
//                         checked={selectedProductSubTypes.includes(subType)}
//                         onCheckedChange={() => handleMultiSelect(subType, setSelectedProductSubTypes)}
//                       />
//                       <Label htmlFor={`product-subtype-${subType}`} className="text-sm cursor-pointer">
//                         {subType}
//                       </Label>
//                     </div>
//                   ))}
//                                   </div>
//                 </FilterAccordionContent>
//               </FilterAccordionItem>

//               {/* Size */}
//               <FilterAccordionItem value="size">
//                 <FilterAccordionTrigger className="text-sm font-medium">Size</FilterAccordionTrigger>
//                 <FilterAccordionContent>
//                 <div className="space-y-2 max-h-32 overflow-y-auto">
//                   {sizeOptions.map((size) => (
//                     <div key={size} className="flex items-center space-x-2">
//                       <Checkbox 
//                         id={`size-${size}`}
//                         checked={selectedSizes.includes(size)}
//                         onCheckedChange={() => handleMultiSelect(size, setSelectedSizes)}
//                       />
//                       <Label htmlFor={`size-${size}`} className="text-sm cursor-pointer">
//                         {size}
//                       </Label>
//                     </div>
//                   ))}
//                                   </div>
//                 </FilterAccordionContent>
//               </FilterAccordionItem>
//             </FilterAccordion>

//           {/* Action Buttons */}
//           <div className="flex gap-3 pt-4 border-t">
//             <Button onClick={clearFilters} variant="outline" className="flex-1">
//               Clear All
//             </Button>
//             <Button onClick={applyFilters} className="flex-1">
//               Apply Filters
//             </Button>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default FilterDrawer; 