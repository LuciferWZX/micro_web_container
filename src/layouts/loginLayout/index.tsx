import React, {FC} from "react";
import { Outlet } from 'umi';

const LoginLayout:FC = () => {
    return(
        <div>
            LoginLayout
            <Outlet/>
        </div>
    )
}
export default LoginLayout