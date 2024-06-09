import { FC, ReactNode, useLayoutEffect, useRef, useState } from 'react';
import Portal from './Portal';
import useOnClickOutside from '@/hooks/useClickOutside';


interface PopoverProps {
    children: ReactNode,
    content: ReactNode,

}

const Popover: FC<PopoverProps> = ({ children, content, ...rest }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [contentWidth, setContentWidth] = useState(0);
    const [show, setShow] = useState(true);
    const [coords, setCoords] = useState({
        left: 0,
        top: 0
    })
    // const popoverDefaultWith = 270;
    const activeClass = show ? 'show' : '';


    useLayoutEffect(() => {
        if (!contentRef.current) return;

        const measureContentWidth = () => {
            const contentElement = contentRef.current!;
            const rect = contentElement.getBoundingClientRect();
            setContentWidth(rect.width);
            setShow(false)
        };

        requestAnimationFrame(measureContentWidth);

    }, []);

    useLayoutEffect(() => {
        if (!btnRef) return
        const target = btnRef.current
        const rect = target!.getBoundingClientRect();

        setCoords({
            top: rect.bottom,
            left: rect.right - contentWidth,
        })
    }, [contentWidth])


    const contentRef = useRef<HTMLDivElement>(null);

    const ref = useOnClickOutside(() => {
        setShow(false);
        const event = new Event('close');
        document.dispatchEvent(event);
    }, contentRef);

    return (
        <div ref={ref} className='app-popover' {...rest}>
            <button
                ref={btnRef}
                className='popover__button'
                onClick={() => setShow(!show)}>
                {children}
            </button>
            <Portal elementCoords={coords}>
                <div
                    ref={contentRef}
                    className={`app-popover__content ${activeClass}`}>
                    {content}
                </div>
            </Portal>
        </div>

    )
};
export default Popover;