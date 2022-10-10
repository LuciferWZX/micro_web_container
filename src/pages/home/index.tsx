import React, {FC} from "react";
import {MicroAppWithMemoHistory} from "umi";

const HomePage:FC=()=>{
    console.log('parent1:',window?.mwcAPP)
    return(
        <div>
            this is HomePage

            <div style={{height:600}}>
                <MicroAppWithMemoHistory name="mwc2" url="/mwc2" errorBoundary={(error) => <div>{error}</div>}   />
            </div>
        </div>
    )
}
export default HomePage