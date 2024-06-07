import { useLayoutEffect, useMemo, useState } from "react";

export interface IVirtualItem {
    index: number,
    offsetTop: number
}

interface IUseFixedSizeList<T> {
    itemsCount: number,
    itemHeight: number,
    listHeight: number,
    overscan?: number,
    getScrollElement: () => T | null
}
export default function useFixedSizeList<T extends HTMLElement>(props: IUseFixedSizeList<T>) {
    const DEFAULT_OVERSCAN = 3;

    const {
        itemsCount,
        itemHeight,
        listHeight,
        overscan = DEFAULT_OVERSCAN,
        getScrollElement
    } = props;

    const [scrollTop, setScrollTop] = useState(0);

    useLayoutEffect(() => {
        const scrollElement = getScrollElement();
        if (!scrollElement) return;

        const handleScroll = () => {
            const scrollTop = scrollElement.scrollTop;
            console.log('sc');
            setScrollTop(scrollTop)
        }
        handleScroll();
        scrollElement.addEventListener('scroll', handleScroll);

        return () => {

            scrollElement.removeEventListener('scroll', handleScroll)
        };
    }, [getScrollElement])

    const paddingBottom = 3;

    const virtualItems = useMemo(() => {
        const rangeStart = scrollTop;
        const rangeEnd = scrollTop + listHeight;
        let startIndex = Math.floor(rangeStart / itemHeight);
        let endIndex = Math.ceil(rangeEnd / itemHeight);

        startIndex = Math.max(0, startIndex - overscan);
        endIndex = Math.min(itemsCount, endIndex + overscan);
        const virtualItems: IVirtualItem[] = [];

        for (let index = startIndex; index < endIndex; index++) {
            virtualItems.push({
                index,
                offsetTop: index * itemHeight
            })
        }
        return virtualItems
    }, [scrollTop, itemsCount, overscan, itemHeight, listHeight])

    const totalHeight = (itemHeight * itemsCount) + paddingBottom;

    return {
        virtualItems,
        totalHeight
    }
}