<<<<<<< HEAD
import { ChangeEvent, ComponentPropsWithoutRef, FC } from 'react';
=======
import { ChangeEvent, ComponentPropsWithoutRef, FC } from 'react'
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8

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
<<<<<<< HEAD
            <div className="list-search__icon">
                <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  >
                    <g id="Page-1" stroke="none" strokeWidth="3" fill="none" fillRule="evenodd" type="MSPage">
                        <g id="Icon-Set" type="MSLayerGroup" transform="translate(-256.000000, -1139.000000)" fill="#FFFFFF">
                            <path d="M269.46,1163.45 C263.17,1163.45 258.071,1158.44 258.071,1152.25 C258.071,1146.06 263.17,1141.04 269.46,1141.04 C275.75,1141.04 280.85,1146.06 280.85,1152.25 C280.85,1158.44 275.75,1163.45 269.46,1163.45 L269.46,1163.45 Z M287.688,1169.25 L279.429,1161.12 C281.591,1158.77 282.92,1155.67 282.92,1152.25 C282.92,1144.93 276.894,1139 269.46,1139 C262.026,1139 256,1144.93 256,1152.25 C256,1159.56 262.026,1165.49 269.46,1165.49 C272.672,1165.49 275.618,1164.38 277.932,1162.53 L286.224,1170.69 C286.629,1171.09 287.284,1171.09 287.688,1170.69 C288.093,1170.3 288.093,1169.65 287.688,1169.25 L287.688,1169.25 Z" id="search" type="MSShapeGroup"></path>
                        </g>
                    </g>
                </svg>
            </div>
=======
            <img src="../../../search.svg" alt="" />
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
            <input placeholder='Search...' type="text" onChange={handleChange} value={value} />
            {value.length > 0 &&
                <button
                    onClick={() => onChangeValue('')}
                    className='list-search__close'>
<<<<<<< HEAD
                    <div className="list-search__close-icon">
                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="close" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
=======
                    <img src="../../../close.svg" alt="close" />
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
                </button>
            }
        </div>
    )
};
export default SearchListInput;