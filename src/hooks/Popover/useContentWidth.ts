import { RefObject, useLayoutEffect, useState } from "react";

export default function useContentWidth<T extends HTMLElement>(ref: RefObject<T>) {

    const [contentWidth, setContentWidth] = useState(0)
    const [contentHeight, setContentHeight] = useState(0)

    useLayoutEffect(() => {
        if (!ref.current) return;

        const contentElement = ref.current!;
        const rect = contentElement.getBoundingClientRect();
        console.log(rect);

        setContentWidth(rect.width);
        setContentHeight(rect.height)

    }, [ref]);

    return [contentWidth, contentHeight];
}