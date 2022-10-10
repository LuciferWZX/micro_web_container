import React, {FC} from "react";
import { Outlet } from 'umi';

const HomeLayout:FC = () => {
    return(
        <div>
            HomeLayout
            <Outlet/>
        </div>
    )
}
export default HomeLayout