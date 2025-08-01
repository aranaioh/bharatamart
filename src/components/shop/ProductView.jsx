import ProductCard from "../ui/utils/ProductCard";
import { PaginationShadcn } from "../ui/PaginationShadcn";
import { useState } from "react";


const Products = [
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        inStock: true,
        isNew: true,
        actualPrice: 999.0,
        discountPercentage: 34,
        description:
            "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
        SKU: "MABC1",
        ratingCount: 100,
        ratingValue: 4.5,
        oldPrice: 1499.0,
        newPrice: 999.0,
    },
    {
        images: [
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
        inStock: true,
        isNew: false,
        actualPrice: 3499.0,
        discountPercentage: 20,
        description:
            "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
        SKU: "NCP4A2",
        ratingCount: 250,
        ratingValue: 4.2,
        oldPrice: 4399.0,
        newPrice: 3499.0,
    },
    {
        images: [
            "/home/todaydeals/bc3.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc4.webp",
        ],
        title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
        inStock: false,
        isNew: true,
        actualPrice: 2999.0,
        discountPercentage: 40,
        description:
            "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
        SKU: "BST1200",
        ratingCount: 180,
        ratingValue: 4.7,
        oldPrice: 4999.0,
        newPrice: 2999.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },
    {
        images: [
            "/home/todaydeals/bc4.webp",
            "/home/todaydeals/bc1.png",
            "/home/todaydeals/bc2.webp",
            "/home/todaydeals/bc3.webp",
        ],
        title: "Mi 10000mAh Power Bank 3i (Blue)",
        inStock: true,
        isNew: false,
        actualPrice: 1199.0,
        discountPercentage: 25,
        description:
            "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
        SKU: "MI3I10000",
        ratingCount: 320,
        ratingValue: 4.3,
        oldPrice: 1599.0,
        newPrice: 1199.0,
    },

];

const PRODUCTS_PER_PAGE = 10;

const ProductView = () => {

    const [page, setPage] = useState(1);
    const pageCount = Math.ceil(Products.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = Products.slice(
        (page - 1) * PRODUCTS_PER_PAGE,
        page * PRODUCTS_PER_PAGE
    );


    return (
        <div className="product-view w-full">
            {/* Products will be displayed here */}

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {paginatedProducts?.map((item, index) => (
                    <div key={index}>
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>


            {/* Pagination */}
            <div className="w-full py-5 flex justify-center">
                <PaginationShadcn
                    page={page}
                    pageCount={pageCount}
                    onPageChange={setPage}
                />
            </div>

        </div>
    );
}

export default ProductView;