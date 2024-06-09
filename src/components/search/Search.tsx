import { FC, useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import SearchList from './SearchList';

import Popover from '../Common/Popover';

const Search: FC = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://api-eu.okotoki.com/coins');
            const data = await response.json();
            setCoins(data)
        }

        loadData()
    }, [])

    return (
        <>
            <Popover
                content={
                    <SearchList coins={coins} />
                }>
                <SearchButton />
            </Popover>
        </>
    )
};
export default Search;