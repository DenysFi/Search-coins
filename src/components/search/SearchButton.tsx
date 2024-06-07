import { useSearchContext } from '@/hooks/useSearchContext';
import { FC } from 'react'

const SearchButton: FC = () => {
    const { setShowList } = useSearchContext()
    return (
        <button className='search__button' onClick={() => setShowList((prev) => !prev)}>
            <div className="search__icon">
                <img src="../../../search.svg" alt="" />
            </div>
            <span>Search</span>
        </button>
    )
};
export default SearchButton;