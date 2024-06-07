import { ChangeEvent, ComponentPropsWithoutRef, FC } from 'react'

interface SearchListInputProps extends ComponentPropsWithoutRef<"div"> {
    onChangeValue: (value: string) => void,
    value: string
}

const SearchListInput: FC<SearchListInputProps> = ({ onChangeValue, value }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeValue(e.target.value);
    };

    return (
        <div className="list-search__input">
            <img src="../../../search.svg" alt="" />
            <input placeholder='Search...' type="text" onChange={handleChange} value={value} />
            {value.length > 0 &&
                <button
                    onClick={() => onChangeValue('')}
                    className='list-search__close'>
                    <img src="../../../close.svg" alt="close" />
                </button>
            }
        </div>
    )
};
export default SearchListInput;