import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent | TouchEvent) => void;

const useOnClickOutside = (handler: Handler) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
<<<<<<< HEAD

=======
>>>>>>> fe5eb9cbe71c22e56b330b447b7821f059bb63c8
            if (!ref.current || ref.current.contains(event.target as Node)) {
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
    }, [handler]);

    return ref;
};

export default useOnClickOutside;