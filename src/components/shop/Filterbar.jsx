import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { FilterAccordion, FilterAccordionContent, FilterAccordionItem, FilterAccordionTrigger } from "@/components/ui/filter-accordion";
import FilterDrawer from "./FilterDrawer";

const Filterbar = () => {
    const maxLimit = 1000;
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

    const handleFiltersChange = (filters) => {
        console.log("Applied filters:", filters);
    };

    const handleAccordionChange = (value) => {
        setOpenItems(value);
    };

    return (
        <div className="filterbar w-full p-4 bg-white rounded-lg shadow-sm max-md:mx-4">
            <div className="flex items-center justify-between md:mb-4">
                <h2 className="text-lg font-semibold">Filter Options</h2>
                <div className="md:hidden">
                    <FilterDrawer onFiltersChange={handleFiltersChange} />
                </div>
            </div>

            <div className="hidden md:block">
                <FilterAccordion
                    type="multiple"
                    className="w-full space-y-3"
                    openItems={openItems}
                    onOpenChange={handleAccordionChange}
                >
                    {/* Price Range */}
                    <FilterAccordionItem value="price-range" className="border border-gray-400 rounded-lg">
                        <FilterAccordionTrigger className="px-4 text-sm font-medium">
                            Price Range
                        </FilterAccordionTrigger>
                        <FilterAccordionContent className="px-4">
                            <div className="space-y-3">
                                <Slider
                                    value={priceRange}
                                    onValueChange={handleSliderChange}
                                    max={maxLimit}
                                    min={200}
                                    step={10}
                                    className="w-full pt-2"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>₹200</span>
                                    <span>₹{maxLimit}</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
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
                    <FilterAccordionItem value="gender" className="border border-gray-400 rounded-lg">
                        <FilterAccordionTrigger className="px-4 text-sm font-medium">
                            Gender
                        </FilterAccordionTrigger>
                        <FilterAccordionContent className="px-4">
                            <RadioGroup value={selectedGender} onValueChange={setSelectedGender}>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="men" id="desktop-gender-men" />
                                        <Label htmlFor="desktop-gender-men" className="text-sm cursor-pointer">Men</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="women" id="desktop-gender-women" />
                                        <Label htmlFor="desktop-gender-women" className="text-sm cursor-pointer">Women</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="unisex" id="desktop-gender-unisex" />
                                        <Label htmlFor="desktop-gender-unisex" className="text-sm cursor-pointer">Unisex</Label>
                                    </div>
                                </div>
                            </RadioGroup>
                        </FilterAccordionContent>
                    </FilterAccordionItem>

                    {/* Category */}
                    <FilterAccordionItem value="category" className="border border-gray-400 rounded-lg">
                        <FilterAccordionTrigger className="px-4 text-sm font-medium">
                            Category
                        </FilterAccordionTrigger>
                        <FilterAccordionContent className="px-4">
                            <div className="space-y-2 max-h-32 overflow-y-auto">
                                {categoryOptions.map((category) => (
                                    <div key={category} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`desktop-category-${category}`}
                                            checked={selectedCategories.includes(category)}
                                            onCheckedChange={() => handleMultiSelect(category, setSelectedCategories)}
                                        />
                                        <Label htmlFor={`desktop-category-${category}`} className="text-sm cursor-pointer">
                                            {category}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </FilterAccordionContent>
                    </FilterAccordionItem>

                    {/* Sub Category */}
                    <FilterAccordionItem value="subcategory" className="border border-gray-400 rounded-lg">
                        <FilterAccordionTrigger className="px-4 text-sm font-medium">
                            Sub Category
                        </FilterAccordionTrigger>
                        <FilterAccordionContent className="px-4">
                            <div className="space-y-2 max-h-32 overflow-y-auto">
                                {subCategoryOptions.map((subCategory) => (
                                    <div key={subCategory} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`desktop-subcategory-${subCategory}`}
                                            checked={selectedSubCategories.includes(subCategory)}
                                            onCheckedChange={() => handleMultiSelect(subCategory, setSelectedSubCategories)}
                                        />
                                        <Label htmlFor={`desktop-subcategory-${subCategory}`} className="text-sm cursor-pointer">
                                            {subCategory}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </FilterAccordionContent>
                    </FilterAccordionItem>

                    {/* Brand */}
                    <FilterAccordionItem value="brand" className="border border-gray-400 rounded-lg">
                        <FilterAccordionTrigger className="px-4 text-sm font-medium">
                            Brand
                        </FilterAccordionTrigger>
                        <FilterAccordionContent className="px-4">
                            <div className="space-y-2 max-h-32 overflow-y-auto">
                                {brandOptions.map((brand) => (
                                    <div key={brand} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`desktop-brand-${brand}`}
                                            checked={selectedBrands.includes(brand)}
                                            onCheckedChange={() => handleMultiSelect(brand, setSelectedBrands)}
                                        />
                                        <Label htmlFor={`desktop-brand-${brand}`} className="text-sm cursor-pointer">
                                            {brand}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </FilterAccordionContent>
                    </FilterAccordionItem>

                    {/* Product Type */}
                    <FilterAccordionItem value="product-type" className="border border-gray-400 rounded-lg">
                        <FilterAccordionTrigger className="px-4 text-sm font-medium">
                            Product Type
                        </FilterAccordionTrigger>
                        <FilterAccordionContent className="px-4">
                            <div className="space-y-2 max-h-32 overflow-y-auto">
                                {productTypeOptions.map((type) => (
                                    <div key={type} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`desktop-product-type-${type}`}
                                            checked={selectedProductTypes.includes(type)}
                                            onCheckedChange={() => handleMultiSelect(type, setSelectedProductTypes)}
                                        />
                                        <Label htmlFor={`desktop-product-type-${type}`} className="text-sm cursor-pointer">
                                            {type}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </FilterAccordionContent>
                    </FilterAccordionItem>

                    {/* Product Sub Type */}
                    <FilterAccordionItem value="product-subtype" className="border border-gray-400 rounded-lg">
                        <FilterAccordionTrigger className="px-4 text-sm font-medium">
                            Product Sub Type
                        </FilterAccordionTrigger>
                        <FilterAccordionContent className="px-4">
                            <div className="space-y-2 max-h-32 overflow-y-auto">
                                {productSubTypeOptions.map((subType) => (
                                    <div key={subType} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`desktop-product-subtype-${subType}`}
                                            checked={selectedProductSubTypes.includes(subType)}
                                            onCheckedChange={() => handleMultiSelect(subType, setSelectedProductSubTypes)}
                                        />
                                        <Label htmlFor={`desktop-product-subtype-${subType}`} className="text-sm cursor-pointer">
                                            {subType}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </FilterAccordionContent>
                    </FilterAccordionItem>

                    {/* Size */}
                    <FilterAccordionItem value="size" className="border border-gray-400 rounded-lg">
                        <FilterAccordionTrigger className="px-4 text-sm font-medium">
                            Size
                        </FilterAccordionTrigger>
                        <FilterAccordionContent className="px-4">
                            <div className="space-y-2 max-h-32 overflow-y-auto">
                                {sizeOptions.map((size) => (
                                    <div key={size} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`desktop-size-${size}`}
                                            checked={selectedSizes.includes(size)}
                                            onCheckedChange={() => handleMultiSelect(size, setSelectedSizes)}
                                        />
                                        <Label htmlFor={`desktop-size-${size}`} className="text-sm cursor-pointer">
                                            {size}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </FilterAccordionContent>
                    </FilterAccordionItem>
                </FilterAccordion>
            </div>
        </div>
    );
}

export default Filterbar;