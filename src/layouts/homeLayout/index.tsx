import React, {FC} from "react";
import { Outlet } from 'umi';
import {StyledHomeLayout, StyledMain} from "@/layouts/homeLayout/style";
import Header from "@/layouts/homeLayout/header";
import Sider from "@/layouts/homeLayout/sider";
import Content from "@/layouts/homeLayout/content";

const HomeLayout:FC = () => {
    return(
        <StyledHomeLayout>
            <Header />
            <StyledMain>
                <Sider/>
                <Content>
                    <Outlet/>
                </Content>
            </StyledMain>

        </StyledHomeLayout>
    )
}
export default HomeLayout