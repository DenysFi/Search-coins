import { SearchContext } from "@/components/search/SearchProvider";
import { useContext } from "react";

export const useSearchContext = () => {
    const props = useContext(SearchContext);
    if (!props) {
        throw new Error("No search context found! ");
    }

    return props;
};