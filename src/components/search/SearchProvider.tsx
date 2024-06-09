import { tabTypes } from "@/constaints/enums";
<<<<<<< HEAD
import { coordsType } from "@/types";
=======
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
import { createContext } from "react";

interface SearchContextProps {
    showList: boolean
    coins: string[]
    setShowList: React.Dispatch<React.SetStateAction<boolean>>;
    setfavoriteCoins: React.Dispatch<React.SetStateAction<string[]>>
    favoriteCoins: string[],
    activeTab: tabTypes,
<<<<<<< HEAD
    setActiveTab: React.Dispatch<React.SetStateAction<tabTypes>>,
    setCoords: React.Dispatch<React.SetStateAction<coordsType>>
    coords: coordsType
=======
    setActiveTab: React.Dispatch<React.SetStateAction<tabTypes>>
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
}

export const SearchContext = createContext<SearchContextProps>(null!);

