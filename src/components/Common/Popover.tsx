import { positionEnum } from '@/constaints/enums';
import useContentWidth from '@/hooks/Popover/useContentWidth';
import useOnClickOutside from '@/hooks/useClickOutside';
import { FC, ReactNode, useCallback, useRef, useState } from 'react';
import Portal from './Portal';
import { Coords, PositionType } from '@/types';
import { getCoordsByPosition } from '@/utiles';
import useWindowResize from '@/hooks/Popover/useWindowResize';

interface PopoverProps {
    children: ReactNode,
    content: ReactNode,
    position?: PositionType
}

const Popover: FC<PopoverProps> = ({ children, content, position = positionEnum.BOTTOMCENTER, ...rest }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const hiddenRef = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);
    const [coords, setCoords] = useState<Coords>({})
    const [contentWidth, contentHeight] = useContentWidth(hiddenRef);
    const activeClass = show ? 'show' : '';

    const handleResize = useCallback((e) => {
        if (!btnRef) return

        function getPosition(rect: DOMRect, contentWidth: number, contentHeight: number) {
            const topContentPoint = rect.y - contentHeight;
            const bottomContentPoint = rect.y + contentHeight
            const leftContentPoint = rect.x - contentWidth;
            const rightContentPoint = rect.x + contentWidth
            console.log(leftContentPoint);


            if (leftContentPoint < 0) {
                if (bottomContentPoint < window.innerHeight) {
                    return positionEnum.BOTTOMLEFT
                } else if (topContentPoint > 0) {
                    return positionEnum.TOPLEFT
                }


            }



            // if (topContentPoint < 0 && bottomContentPoint > window.innerHeight && leftContentPoint < 0) {
            //     return positionEnum.RIGHTBOTTOM;
            // }
            // if (topContentPoint < 0 && bottomContentPoint > window.innerHeight && rightContentPoint > window.innerWidth) {
            //     return positionEnum.LEFTBOTTOM;
            // }

            // if (leftContentPoint < 0) {
            //     return positionEnum.RIGHTCENTER;
            // }

            // if (topContentPoint < 0) {
            //     return positionEnum.BOTTOMCENTER;
            // }
            // if (bottomContentPoint > window.innerHeight) {
            //     return positionEnum.TOPCENTER;
            // }


        }

        const target = btnRef.current
        const rect = target!.getBoundingClientRect();

        const pos = getPosition(rect, contentWidth, contentHeight)!;
        console.log(pos);
        const coords = getCoordsByPosition(rect, contentWidth, contentHeight, positionEnum.RIGHTCENTER)
        setCoords({ ...coords })

    }, [contentWidth, contentHeight, position])

    useWindowResize(handleResize)


    const contentRef = useRef<HTMLDivElement>(null);
    const ref = useOnClickOutside(() => {
        setShow(false);
        const event = new Event('close');
        document.dispatchEvent(event);
    }, contentRef);

    function handleClick() {
        setShow(!show)
    }

    return (
        <div ref={ref} className='app-popover' {...rest}>
            <button
                ref={btnRef}
                className='popover__button'
                onClick={handleClick}>
                {children}
            </button>
            <Portal elementCoords={coords} >
                <div
                    ref={contentRef}
                    className={`app-popover__content ${activeClass}`}>
                    {content}
                </div>
            </Portal>
            <div ref={hiddenRef} style={{ visibility: 'hidden', position: 'absolute', pointerEvents: 'none' }}>
                {content}
            </div>
        </div>

    )
};
export default Popover;