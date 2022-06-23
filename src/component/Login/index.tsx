import { useEffect } from 'react'
import { Form, Input, Button } from '@arco-design/web-react';
// import userApi from '../../services/user'
import styles from './index.module.scss'

const FormItem = Form.Item;

interface formInterface {
  phone: string;
  password: string;
}

const Login = () => {
  const [form] = Form.useForm();
  
  const handleLoginClick = (values:formInterface) => {
    // userApi.login(values).then((res) => {
    //   console.log(res, 'res');
    // })
  }

  return <div className={styles.content}>
    <Form
      form={form}
      className={styles.formStyle}
      style={{ width: 400 }}
      onSubmit={handleLoginClick}
    >
      <FormItem
        label='手机号'
        field='phone'
        required
        rules={[
          {
            type: 'string',
            required: true,
            message: '请输入手机号'
          },
        ]}
      >
        <Input placeholder='请输入注册手机号' />
      </FormItem>
      <FormItem
        label='密码'
        field='password'
        rules={[
          {
            required: true,
            type: 'string',
            message: '请输入密码'
          },
        ]}
      >
        <Input.Password placeholder='请输入密码' />
      </FormItem>
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button type='primary' htmlType='submit' style={{ marginRight: 24 }}>
          登陆
        </Button>
        <Button
          style={{ marginRight: 24 }}
          onClick={() => {
            form.resetFields();
          }}
        >
          重置
        </Button>
      </FormItem>
    </Form>
  </div>
}

export default Login