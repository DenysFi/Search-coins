import { FC, useCallback, useRef, useState } from 'react';
import SearchListInput from './SearchListInput';
import SearchListItem from './SearchListItem';
import SarchNav from './SearchNav';
import { tabTypes } from '@/constaints/enums';
import useFixedSizeList from '@/hooks/useFixedSizeList';


type SearchListProps = {
    coins: string[],
}

const SearchList: FC<SearchListProps> = ({ coins }) => {
    const [activeTab, setActiveTab] = useState(tabTypes.ALL);
    const [favoriteCoins, setfavoriteCoins] = useState<string[]>([]);
    const [searchValue, setSearchValue] = useState('');

    const scrollElementRef = useRef<HTMLDivElement>(null);
    const itemHeight = 44;
    const maxContainerHeight = 300;

    const filteredCoins = activeTab === tabTypes.ALL ?
        coins.filter(coin => coin.includes(searchValue.toUpperCase())) :
        favoriteCoins.filter(coin => coin.includes(searchValue.toUpperCase()))

    const { virtualItems, totalHeight } = useFixedSizeList<HTMLDivElement>({
        itemsCount: filteredCoins.length,
        itemHeight,
        listHeight: maxContainerHeight,
        getScrollElement: useCallback(() => scrollElementRef.current, [])
    });

    function handleFavoriteCoins(coin: string) {
        const active = favoriteCoins.includes(coin);

        setfavoriteCoins((prev) => active ?
            prev.filter(fc => fc !== coin) :
            [...prev, coin])
    }

    return (
        <div className={`search__list list-search `} >
            <SearchListInput value={searchValue} onChangeValue={setSearchValue} />
            <div className="list-search__body">
                <SarchNav activeTab={activeTab} setActiveTab={setActiveTab} />
                <div ref={scrollElementRef} className="list-search__items"
                    style={{ height: `${maxContainerHeight}px` }}>
                    <div style={{ height: totalHeight }}>
                        {virtualItems.map((virtualItem) => {
                            const coin = filteredCoins[virtualItem.index]!;
                            const active = favoriteCoins.includes(coin);
                            return <SearchListItem
                                coin={coin}
                                active={active}
                                onClick={() => handleFavoriteCoins(coin)}
                                key={coin}
                                style={{
                                    height: itemHeight,
                                    top: 0,
                                    position: "absolute",
                                    transform: `translateY(${virtualItem.offsetTop}px)`
                                }}
                            />
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
};
export default SearchList;