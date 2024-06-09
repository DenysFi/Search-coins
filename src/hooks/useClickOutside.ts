import { RefObject, useEffect, useRef } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

const useOnClickOutside = <T extends HTMLElement>(handler: Handler, additionalRef: RefObject<T>) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (!ref.current || !additionalRef.current || ref.current.contains(event.target as Node) || additionalRef.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [handler, additionalRef]);

    return ref;
};

export default useOnClickOutside;