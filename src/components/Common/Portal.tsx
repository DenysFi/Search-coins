import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from "react-dom";

interface PortalProps {
    children: ReactNode,
    elementCoords: {
        top?: number,
        right?: number,
        bottom?: number,
        left?: number,
        transformX?: number,
        transformY?: number
    }
}

const Portal: FC<PortalProps> = ({ children, elementCoords }) => {
    const div = document.createElement('div');
    div.classList.add('portal')
    div.style.zIndex = '1000';

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('portal-inner')
    innerDiv.style.position = 'absolute'

    const transformValues: string[] = [];

    for (const [key, value] of Object.entries(elementCoords)) {

        const newValue = value ? `${value}px` : '0';

        if (key === 'top') innerDiv.style.top = newValue
        if (key === 'right') innerDiv.style.right = newValue
        if (key === 'bottom') innerDiv.style.bottom = newValue
        if (key === 'left') innerDiv.style.left = newValue

        if (key === 'transformX' || key === 'transformY') {
            const transformValue = `${key === 'transformX' ? 'translateX' : 'translateY'}(${value}px)`;
            transformValues.push(transformValue);
        }
    }

    if (transformValues.length) {
        innerDiv.style.transform = transformValues.join(' ');
    }

    div.appendChild(innerDiv)
    useEffect(() => {
        document.body.appendChild(div);
        return () => {
            document.body.removeChild(div);
        };
    }, [div]);

    return createPortal(children, innerDiv)
};
export default Portal;