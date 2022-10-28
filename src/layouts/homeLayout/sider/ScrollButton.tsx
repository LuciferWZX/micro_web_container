import React, {FC} from "react";
import {FloatIconButton, StyledScrollButton} from "@/layouts/homeLayout/sider/style";
import {LeftArrowIcon} from "@/components/Icon";
import {useModel} from "foca";
import layoutStore from "@/stores/layout.store";

const ScrollButton:FC = () => {
    const isScroll = useModel(layoutStore,state => state.isScroll)
    const scrollMenu=()=>{
        layoutStore.updateState({
            isScroll:!isScroll
        })
    }
    return(
        <StyledScrollButton>
            <FloatIconButton onClick={scrollMenu}>
                <LeftArrowIcon rotate={isScroll?180:0}/>
            </FloatIconButton>
        </StyledScrollButton>
    )
}
export default ScrollButton