
import SearchButton from './SearchButton';
import SearchList from './SearchList';

import Popover from '../Common/Popover';
import { FC, useState, useEffect, useCallback } from 'react';

const Search: FC = () => {
    const [coins, setCoins] = useState([]);

    const loadData = useCallback(async () => {
        const abortController = new AbortController();
        try {
            const response = await fetch('https://api-eu.okotoki.com/coins', { signal: abortController.signal });
            const data = await response.json();
            setCoins(data);
        } catch (error) {
            console.error(error);
        }
        return () => {
            abortController.abort();
        };
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <>
            <Popover
                content={
                    <SearchList coins={coins} />
                }>
                <SearchButton />
            </Popover>
        </>
    );
};

export default Search;