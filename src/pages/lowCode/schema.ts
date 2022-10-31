import {ElementNode} from "@/low_code_engine/types/elementNode";

const schema:ElementNode={
    type:"page",
    props: {
        style:{}
    },
    children:[
        {
            type:"Input",
            props:{
                style:{
                    color:'red',
                }
            }
        }
    ]
}
export default schema