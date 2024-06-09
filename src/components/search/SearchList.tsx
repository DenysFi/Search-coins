import { FC, useCallback, useRef, useState } from 'react';
import SearchListInput from './SearchListInput';
import SearchListItem from './SearchListItem';
import SarchNav from './SearchNav';
import { tabTypes } from '@/constaints/enums';
import { useSearchContext } from '@/hooks/useSearchContext';
import useFixedSizeList from '@/hooks/useFixedSizeList';
<<<<<<< HEAD
import useOnClickOutside from '@/hooks/useClickOutside';
import Popover from '../Common/Popover';


const SearchList: FC = () => {
    const { coins, favoriteCoins, showList, activeTab, setShowList, coords } = useSearchContext();
    const scrollElementRef = useRef<HTMLDivElement>(null);
=======

const SearchList: FC = () => {
    const { coins, favoriteCoins, showList, activeTab } = useSearchContext();
    const scrollElementRef = useRef<HTMLUListElement>(null);
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
    const [searchValue, setSearchValue] = useState('');
    const itemHeight = 44;
    const maxContainerHeight = 300;

    const filteredCoins = activeTab === tabTypes.ALL ?
        coins.filter(coin => coin.includes(searchValue.toUpperCase())) :
        favoriteCoins.filter(coin => coin.includes(searchValue.toUpperCase()))

<<<<<<< HEAD
    const { virtualItems, totalHeight } = useFixedSizeList<HTMLDivElement>({
=======
    const { virtualItems, totalHeight } = useFixedSizeList<HTMLUListElement>({
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
        itemsCount: filteredCoins.length,
        itemHeight,
        listHeight: maxContainerHeight,
        getScrollElement: useCallback(() => scrollElementRef.current, [])
    });

<<<<<<< HEAD
    const ref = useOnClickOutside(() => {
        setShowList(false);
        setSearchValue('');
    });

    return (
        <Popover coords={coords} >
            <div ref={ref} className={`search__list list-search ${showList ? 'active' : ''}`} >
                <SearchListInput value={searchValue} onChangeValue={setSearchValue} />
                <div className="list-search__body">
                    <SarchNav />
                    <div ref={scrollElementRef} className="list-search__items"
                        style={{ height: `${maxContainerHeight}px` }}>
                        <div style={{ height: totalHeight }}>
                            {virtualItems.map((virtualItem) => {
                                const coin = filteredCoins[virtualItem.index]!;
                                return <SearchListItem
                                    coin={coin}
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
        </Popover>
=======

    return (
        <div className={`search__list list-search ${showList ? 'active' : ''}`}>
            <SearchListInput value={searchValue} onChangeValue={setSearchValue} />
            <div className="list-search__body">
                <SarchNav />
                <ul ref={scrollElementRef} className="list-search__items"
                    style={{ height: `${maxContainerHeight}px` }}>
                    <div style={{ height: totalHeight }}>
                        {virtualItems.map((virtualItem) => {
                            const coin = filteredCoins[virtualItem.index]!;
                            return <SearchListItem
                                coin={coin}
                                key={coin}
                                style={{
                                    height: itemHeight,
                                    width: '100%',
                                    top: 0,
                                    position: "absolute",
                                    transform: `translateY(${virtualItem.offsetTop}px)`
                                }}
                            />
                        })}
                    </div>
                </ul>
            </div>
        </div>
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
    )
};
export default SearchList;