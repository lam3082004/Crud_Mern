import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AlertMessage from "../layout/AlertMessage";
// import Dashboard from "../../views/Dashboard";
// import RegisterForm from "./RegisterForm";
//import AlertMessage from '../layout/AlertMessage'

const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext)

  //const history = useHistory()
  // trạng thái ban đầu
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })

  const [alert, setAlert] = useState(null)

  const { username, password } = loginForm

  const onChangeLoginForm = event =>
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value
    });
  // gặp vấn đề đó là:
  // sau khi vào đc Dashboard reset lại trang thì lại trang thì lại bị out ra trang login tương tự vs Register
  // để giải quyết vấn đề thì phải:
  // kiểm tra access token trên server của người dùng thì gửi req lên server bảo người dùng có hoặc ko có
  //để cho người dùng được xác thực
  const login = async event => {
    event.preventDefault()

    try {
      const loginData = await loginUser(loginForm)
      if (loginData.success) {
        // history.push('/dashboard')
      }
      else {
        setAlert({ type: 'danger', message: loginData.message })
        setTimeout(() => setAlert(null), 4000)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form className='my-4' onSubmit={login}>
        <AlertMessage info={alert} />

        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Username'
            name='username'
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            required
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button variant='success' type='submit'>
          Login
        </Button>
      </Form>
      <p>
        Don't have an account?
        <Link to='/register'>
          <Button variant='info' size='sm' className='ml-2'>
            Register
          </Button>
        </Link>
      </p>
    </>
  )
};

export default LoginForm;
