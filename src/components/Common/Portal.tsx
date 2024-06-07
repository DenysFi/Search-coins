import { FC, ReactNode } from 'react';
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode
}

const Portal: FC<PortalProps> = ({ children }) => {
    const mount = document.getElementById("portal-root")!;
    return createPortal(children, mount)
};
export default Portal;