import React, {FC} from "react";
import styles from './index.less'
import schema from "@/pages/lowCode/schema";
import BuilderEngine from "@/low_code_engine/builders";
const LowCodePage:FC=()=>{

    return(
        <div className={styles.lowCodePage}>
            <BuilderEngine schema={schema} />
        </div>
    )
}
export default LowCodePage