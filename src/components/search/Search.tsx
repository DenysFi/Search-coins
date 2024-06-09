<<<<<<< HEAD
=======
import useOnClickOutside from '@/hooks/useClickOutside';
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
import { FC, useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import SearchList from './SearchList';
import { SearchContext } from './SearchProvider';
import { tabTypes } from '@/constaints/enums';
<<<<<<< HEAD
import { coordsType } from '@/types';
=======
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8

const Search: FC = () => {
    const [showList, setShowList] = useState(false);
    const [coins, setCoins] = useState([]);
    const [favoriteCoins, setfavoriteCoins] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState(tabTypes.ALL);
<<<<<<< HEAD
    const [coords, setCoords] = useState<coordsType>({
        left: 0,
        top: 0
    });
=======

>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://api-eu.okotoki.com/coins');
            const data = await response.json();
            setCoins(data)
        }

        loadData()
    }, [])

<<<<<<< HEAD
=======
    const ref = useOnClickOutside(() => setShowList(false));
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8

    return (
        <SearchContext.Provider
            value={{
                showList,
                coins,
                setShowList,
                favoriteCoins,
                setfavoriteCoins,
                activeTab,
                setActiveTab,
<<<<<<< HEAD
                setCoords,
                coords,
            }}>
            <div className='search'>
=======
            }}>
            <div ref={ref} className='search'>
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
                <SearchButton />
                <SearchList />
            </div>
        </SearchContext.Provider>
    )
};
export default Search;