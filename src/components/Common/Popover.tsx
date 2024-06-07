import { FC, ReactNode } from 'react';
import Portal from './Portal';
import { coordsType } from '@/types';

interface PopoverProps {
    coords: coordsType,
    children: ReactNode
}

const Popover: FC<PopoverProps> = ({ children, coords }) => {
    return (
        <Portal>
            <div style={{ position: 'absolute', ...coords }}>
                {children}
            </div>
        </Portal>
    )
};
export default Popover;