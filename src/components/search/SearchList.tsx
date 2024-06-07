import { FC, useCallback, useRef, useState } from 'react';
import SearchListInput from './SearchListInput';
import SearchListItem from './SearchListItem';
import SarchNav from './SearchNav';
import { tabTypes } from '@/constaints/enums';
import { useSearchContext } from '@/hooks/useSearchContext';
import useFixedSizeList from '@/hooks/useFixedSizeList';
import useOnClickOutside from '@/hooks/useClickOutside';
import Popover from '../Common/Popover';


const SearchList: FC = () => {
    const { coins, favoriteCoins, showList, activeTab, setShowList, coords } = useSearchContext();
    const scrollElementRef = useRef<HTMLDivElement>(null);
    const [searchValue, setSearchValue] = useState('');
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
    )
};
export default SearchList;