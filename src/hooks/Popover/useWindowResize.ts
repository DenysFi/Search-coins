import { useLayoutEffect } from "react";

export default function useWindowResize(callback: () => void) {
    useLayoutEffect(() => {
        callback();
        window.addEventListener('resize', callback)
        return () => window.removeEventListener('resize', callback)
    }, [callback])
}

