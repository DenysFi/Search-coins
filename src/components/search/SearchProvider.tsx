import { tabTypes } from "@/constaints/enums";
import { coordsType } from "@/types";
import { createContext } from "react";

interface SearchContextProps {
    showList: boolean
    coins: string[]
    setShowList: React.Dispatch<React.SetStateAction<boolean>>;
    setfavoriteCoins: React.Dispatch<React.SetStateAction<string[]>>
    favoriteCoins: string[],
    activeTab: tabTypes,
    setActiveTab: React.Dispatch<React.SetStateAction<tabTypes>>,
    setCoords: React.Dispatch<React.SetStateAction<coordsType>>
    coords: coordsType
}

export const SearchContext = createContext<SearchContextProps>(null!);

