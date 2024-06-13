import { positionEnum } from "@/constaints/enums"
import { Coords } from "@/types"

export function getCoordsByPosition(rect: DOMRect, contentWidth: number, contentHeight: number, position: positionEnum): Coords {
    switch (position) {
        case positionEnum.BOTTOMCENTER: {
            return ({
                top: rect.bottom,
                left: rect.right - (contentWidth / 2) - (rect.width / 2),
            })
        }
        case positionEnum.BOTTOMRIGHT: {
            return ({
                top: rect.bottom,
                left: rect.right - contentWidth,
            })
        }
        case positionEnum.BOTTOMLEFT: {
            return ({
                top: rect.bottom,
                left: rect.left,
            })
        }
        case positionEnum.LEFTBOTTOM: {
            return ({
                top: rect.bottom - contentHeight,
                left: rect.left - contentWidth,
            })
        }
        case positionEnum.LEFTCENTER: {
            return ({
                top: rect.bottom - contentHeight / 2,
                left: rect.left - contentWidth,
            })
        }
        case positionEnum.LEFTTOP: {
            return ({
                top: rect.top,
                left: rect.left - contentWidth,
            })
        }
        case positionEnum.RIGHTBOTTOM: {
            return ({
                top: rect.bottom - contentHeight,
                left: rect.left + rect.width,
            })
        }
        case positionEnum.RIGHTCENTER: {
            return ({
                top: rect.bottom - contentHeight / 2,
                left: rect.left + rect.width,
            })
        }
        case positionEnum.RIGHTTOP: {
            return ({
                top: rect.top,
                left: rect.left + rect.width,
            })
        }
        case positionEnum.TOPCENTER: {
            return ({
                top: rect.top - contentHeight,
                left: rect.right - (contentWidth / 2) - (rect.width / 2),
            })
        }
        case positionEnum.TOPLEFT: {
            return ({
                top: rect.top - contentHeight,
                left: rect.left,
            })
        }
        case positionEnum.TOPRIGHT:
        default: {
            return ({
                top: rect.top - contentHeight,
                left: rect.right - contentWidth,
            })
        }
    }
}