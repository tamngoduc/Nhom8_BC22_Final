import {
  MdOutlineApartment,
  MdHouseSiding,
  MdOutlineWater,
  MdCabin,
} from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import {
  GiKidSlide,
  GiSpaceNeedle,
  GiCampingTent,
  GiLightningDome,
  GiEvilTree,
  GiWaveSurfer,
  GiMountainCave,
  GiCaveEntrance,
  GiGolfFlag,
} from "react-icons/gi";
import { AiOutlineCoffee } from "react-icons/ai";
import { FaCampground, FaUmbrellaBeach, FaSwimmingPool } from "react-icons/fa";
import { RiEarthquakeFill } from "react-icons/ri";

export const locationsTab = [
  { id: 1, label: "Design", icon: <MdOutlineApartment size={24} /> },
  { id: 2, label: "Arctic", icon: <BsSnow size={24} /> },
  { id: 3, label: "Shared Homes", icon: <MdHouseSiding size={24} /> },
  { id: 4, label: "LakeFront", icon: <MdOutlineWater size={24} /> },
  { id: 5, label: "National Parks", icon: <GiKidSlide size={24} /> },
  { id: 6, label: "Bed & Breakfast ", icon: <AiOutlineCoffee size={24} /> },
  { id: 7, label: "OMG!", icon: <GiSpaceNeedle size={24} /> },
  { id: 8, label: "Camping", icon: <FaCampground size={24} /> },
  { id: 9, label: "A-frames", icon: <GiCampingTent size={24} /> },
  { id: 10, label: "Domes", icon: <GiLightningDome size={24} /> },
  { id: 11, label: "Tiny Homes", icon: <BiHomeAlt size={24} /> },
  { id: 12, label: "Treehouses", icon: <GiEvilTree size={24} /> },
  { id: 13, label: "Surfing", icon: <GiWaveSurfer size={24} /> },
  { id: 14, label: "CountrySide", icon: <GiMountainCave size={24} /> },
  { id: 15, label: "Caves", icon: <GiCaveEntrance size={24} /> },
  { id: 16, label: "Golfing", icon: <GiGolfFlag size={24} /> },
  { id: 17, label: "Cabins", icon: <MdCabin size={24} /> },
  { id: 18, label: "Earth Homes", icon: <RiEarthquakeFill size={24} /> },
  { id: 19, label: "Tropical", icon: <FaUmbrellaBeach size={24} /> },
  { id: 20, label: "Amazing Pools", icon: <FaSwimmingPool size={24} /> },
];

export const locations = [
  {
    id: 1,
    locationImages:
      "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Gardon Reveira, Italy",
    days: "Oct 2-9",
    price: "$14,999 CAD night",
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    locationImages:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Joshua tree, USA",
    days: "Sep 2-11",
    price: "$3000 CAD night",
    isNew: false,
    rating: 4.99,
  },
  {
    id: 3,
    locationImages:
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Uvita rosa, Costa Rica",
    days: "Nov 19-22",
    price: "$1,129 CAD night",
    isNew: true,
    rating: 4.6,
  },
  {
    id: 4,
    locationImages:
      "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Navidad, Chile",
    days: "Sep 13-18",
    price: "$208 CAD night",
    isNew: false,
    rating: 4.2,
  },
  {
    id: 5,
    locationImages:
      "https://images.unsplash.com/photo-1647891940243-77a6483a152e?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Paraty, Brazil",
    days: "Aug 1-6",
    price: "$243 CAD night",
    isNew: true,
    rating: 4.1,
  },
  {
    id: 6,
    locationImages:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Raelington, Norway",
    days: "Oct 9-15",
    price: "$698 CAD night",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 7,
    locationImages:
      "https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Terrasini, Italy",
    days: "June 7-12",
    price: "$467 CAD night",
    isNew: true,
    rating: 4.7,
  },
  {
    id: 8,
    locationImages:
      "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=400&h=250&q=60",

    location: "San Jose, Mexico",
    days: "Jun 11-16",
    price: "$1,767 CAD night",
    isNew: false,
    rating: 4.8,
  },
  {
    id: 9,
    locationImages:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Tulum, Mexico",
    days: "Jul 1-6",
    price: "$910 CAD night",
    isNew: true,
    rating: 4.3,
  },
  {
    id: 10,
    locationImages:
      "https://images.unsplash.com/photo-1518593929011-2b5ef6be57c7?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Inglis, Canada",
    days: "Jun 12-18",
    price: "$629 CAD night",
    isNew: false,
    rating: 4.6,
  },
  {
    id: 11,
    locationImages:
      "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Jenner, California",
    days: "Nov 2-7",
    price: "$2,595 CAD night",
    isNew: false,
    rating: 4.1,
  },
  {
    id: 12,
    locationImages:
      "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Malibu, US",
    days: "Jun 3-4",
    price: "$4,467 CAD night",
    isNew: false,
    rating: 4.2,
  },
  {
    id: 13,
    locationImages:
      "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Bolzano, Italy",
    days: "Sep 22-25",
    price: "$358 CAD night",
    isNew: true,
    rating: 4.5,
  },
  {
    id: 14,
    locationImages:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Hawaii, US",
    days: "Nov 4-10",
    price: "$777 CAD night",
    isNew: true,
    rating: 4.8,
  },
  {
    id: 15,
    locationImages:
      "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Lagos, Portugal",
    days: "Sep 25-Oct 2",
    price: "$2,999 CAD night",
    isNew: true,
    rating: 4.88,
  },
  {
    id: 16,
    locationImages:
      "https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=400&h=250&q=60",

    location: "LunenBurg, Canada",
    days: "Oct 4-9",
    price: "$500 CAD night",
    isNew: false,
    rating: 4.2,
  },
  {
    id: 17,
    locationImages:
      "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Santa Rosa, US",
    days: "Jun 2-9",
    price: "$3,369 CAD night",
    isNew: false,
    rating: 4.1,
  },
  {
    id: 18,
    locationImages:
      "https://images.unsplash.com/photo-1465147264724-326b45c3c59b?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Carlux, France",
    days: "Oct 28-Nov 4",
    price: "$2511 CAD night",
    isNew: true,
    rating: 4.5,
  },
  {
    id: 19,
    locationImages:
      "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Palm desert, US",
    days: "Jun 11-16",
    price: "$3200 CAD night",
    isNew: true,
    rating: 4.7,
  },
  {
    id: 20,
    locationImages:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60",

    location: "Ressaca, Brazil",
    days: "Oct 2-9",
    price: "$14,999 CAD night",
    isNew: false,
    rating: 4.5,
  },
];
