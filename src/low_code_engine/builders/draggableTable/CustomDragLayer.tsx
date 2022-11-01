import React, {FC} from "react";
import {useDragLayer, XYCoord} from "react-dnd";
import {StyledDragCard, StyledDragPreview} from "@/low_code_engine/builders/draggableTable/style";
import {DraggedType} from "@/low_code_engine/types/draggedType";


function snapToGrid(x: number, y: number): [number, number] {
    const snappedX = Math.round(x / 32) * 32;
    const snappedY = Math.round(y / 32) * 32;
    return [snappedX, snappedY];
}
function getItemStyles(
    initialOffset: XYCoord | null,
    currentOffset: XYCoord | null,
    isSnapToGrid?: boolean
) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        };
    }

    let { x, y } = currentOffset;

    if (isSnapToGrid) {
        x -= initialOffset.x;
        y -= initialOffset.y;
        [x, y] = snapToGrid(x, y);
        x += initialOffset.x;
        y += initialOffset.y;
    }

    const transform = `translate(${x}px, ${y}px)`;
    return {
        transform,
        WebkitTransform: transform,
        opacity:1
    };
}
interface IProps{
    isSnapToGrid?:boolean
}
const CustomDragLayer:FC<IProps> = (props) => {
    const { itemType, isDragging, item, initialOffset, currentOffset } =
        useDragLayer((monitor) => {
            return {
                item: monitor.getItem(),
                itemType: monitor.getItemType(),
                initialOffset: monitor.getInitialSourceClientOffset(),
                currentOffset: monitor.getSourceClientOffset(),
                isDragging: monitor.isDragging(),
            }
        });
    const renderItem=()=>{
        switch (itemType) {
            case DraggedType.Card:
                return <StyledDragCard>{item.name}</StyledDragCard>;
            default:
                return null;
        }
    }

    if (!isDragging) {
        return null;
    }

    return (
        <StyledDragPreview>
            <div
                style={getItemStyles(initialOffset, currentOffset, props.isSnapToGrid)}
            >
                {renderItem()}
            </div>
        </StyledDragPreview>
    );
}
export default CustomDragLayer