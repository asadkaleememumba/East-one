import React from "react";
import Input from "antd/lib/input";
import Form from "antd/lib/form";
import Checkbox from "antd/lib/checkbox";
import Button from "antd/lib/button";
import Icon from "antd/lib/icon";
import { FormComponentProps } from "antd/es/form";

import { LoginStyle } from "./login.style";
// import { useAppContext } from "../../AppProvider";

type IProps = FormComponentProps;

const Login = (props: IProps) => {
  const {
    form: { getFieldDecorator }
  } = props;
  // const {userObj} = useAppContext();
  // console.log("userObj -->", userObj);
  return (
    <LoginStyle>
      <Form onSubmit={() => {}} className="login-form">
        <span>Email or phone number</span>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <span>Password</span>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <div>
          Dont you have an account? <strong>Create Account</strong>
        </div>
      </Form>
    </LoginStyle>
  );
};

export default Form.create()(Login);
