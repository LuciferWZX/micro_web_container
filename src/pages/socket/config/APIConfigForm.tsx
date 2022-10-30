import React, {FC, useEffect} from "react";
import {Button, Form, Input, Select} from "antd";
import JsonEditor from "../../../components/JsonEditor";
import apiStore from "@/stores/api.store";
const {Option}=Select
const APIConfigForm:FC = () => {
    const [form] = Form.useForm();
    useEffect(()=>{
        let {address,headers,params,method}=apiStore.state
        let t_header = headers
        let t_params = params
        if(headers){
            t_header = JSON.stringify(headers)
        }
        if(params){
            t_params = JSON.stringify(params)
        }
        form.setFieldsValue({
            address:address,
            headers:[t_header,[]],
            params:[t_params,[]],
            method:method
        })
    },[])

    const onFinish=(values:any)=>{
        console.log(values)
        let headers = values['headers'][0] ?? null
        let params = values['params'][0] ?? null
        if(headers){
            headers = JSON.parse(headers)
        }
        if(params){
            params = JSON.parse(params)
        }
        apiStore.updateState({
            address:values['address'],
            method:values['method'],
            headers,
            params
        })
    }
    return(
        <Form
            onFinish={onFinish}
            form={form}
            initialValues={{
                address:{
                    protocol:"http",
                    url:""
                },
                method:'get'
            }}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
            <Form.Item label={"服务器地址"} required={true}>
                <Input.Group compact>
                    <Form.Item
                        name={['address', 'protocol']}
                        noStyle
                    >
                        <Select placeholder="协议" style={{width:80}}>
                            <Option value="http">http</Option>
                            <Option value="https">https</Option>
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
            <Form.Item
                name={"method"}
                label={"方式"}
            >
                <Select placeholder="method">
                    <Option value="get">get</Option>
                    <Option value="post">post</Option>
                </Select>
            </Form.Item>
            <Form.Item
                label={"请求头"}
                name={'headers'}
                rules={[
                    {
                        validator: async (rule, value) => {
                            if(value[1].length>0){
                                // throw new Error(value[1][0].message);
                                throw new Error("json格式不正确");
                            }
                        }
                    }
                ]}
            >
                <JsonEditor style={{height:300}} id={'header'}  />
            </Form.Item>
            <Form.Item
                label={"参数"}
                name={'params'}
                rules={[
                    {
                        validator: async (rule, value) => {
                            if(value[1].length>0){
                                // throw new Error(value[1][0].message);
                                throw new Error("json格式不正确");
                            }
                        }
                    }
                ]}
            >
                <JsonEditor style={{height:300}} id={'params'}  />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button style={{float:'right'}} htmlType={"submit"} type={"primary"}>去使用</Button>
            </Form.Item>
        </Form>
    )
}
export default APIConfigForm