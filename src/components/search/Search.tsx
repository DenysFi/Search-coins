import { FC, useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import SearchList from './SearchList';
import { SearchContext } from './SearchProvider';
import { tabTypes } from '@/constaints/enums';
import { coordsType } from '@/types';

const Search: FC = () => {
    const [showList, setShowList] = useState(false);
    const [coins, setCoins] = useState([]);
    const [favoriteCoins, setfavoriteCoins] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState(tabTypes.ALL);
    const [coords, setCoords] = useState<coordsType>({
        left: 0,
        top: 0
    });

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://api-eu.okotoki.com/coins');
            const data = await response.json();
            setCoins(data)
        }

        loadData()
    }, [])


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
                setCoords,
                coords,
            }}>
            <div className='search'>
                <SearchButton />
                <SearchList />
            </div>
        </SearchContext.Provider>
    )
};
export default Search;