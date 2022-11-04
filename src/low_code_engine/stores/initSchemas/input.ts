import {TSchema} from "@/low_code_engine/types/schema";
import dayjs from "dayjs";

const inputSchemas:TSchema={
    children: [],
    id: dayjs().unix().toString(),
    type:"Input",
    props:{}
}
export default inputSchemas