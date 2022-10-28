import React, {FC} from "react";
import {Form, Input, Select} from "antd";
import JsonEditor from "../../../components/JsonEditor";
const {Option}=Select
const WebsocketConfigForm:FC = () => {
    return(
        <Form
            labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
        >
            <Form.Item label={"服务器地址"} required={true}>
                <Input.Group compact>
                    <Form.Item
                        name={['address', 'type']}
                        noStyle
                        rules={[{ required: true, message: 'Province is required' }]}
                    >
                        <Select placeholder="类型" style={{width:80}}>
                            <Option value="ws">ws</Option>
                            <Option value="wss">wss</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name={['address', 'url']}
                        noStyle
                        rules={[{ required: true, message: '请输入地址' }]}
                    >
                        <Input style={{ width: 'calc(100% - 80px)' }} placeholder="请输入" allowClear={true} />
                    </Form.Item>
                </Input.Group>
            </Form.Item>
            <Form.Item label={"参数"} >
                <JsonEditor style={{height:300}} onChange={(json)=>{
                    console.log(json)
                }} id={'params'}  />
            </Form.Item>
        </Form>
    )
}
export default WebsocketConfigForm