import useOnClickOutside from '@/hooks/useClickOutside';
import { FC, useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import SearchList from './SearchList';
import { SearchContext } from './SearchProvider';
import { tabTypes } from '@/constaints/enums';

const Search: FC = () => {
    const [showList, setShowList] = useState(false);
    const [coins, setCoins] = useState([]);
    const [favoriteCoins, setfavoriteCoins] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState(tabTypes.ALL);


    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://api-eu.okotoki.com/coins');
            const data = await response.json();
            setCoins(data)
        }

        loadData()
    }, [])

    const ref = useOnClickOutside(() => setShowList(false));

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
            }}>
            <div ref={ref} className='search'>
                <SearchButton />
                <SearchList />
            </div>
        </SearchContext.Provider>
    )
};
export default Search;