import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { DevTool } from "@hookform/devtools";

const Login = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitForm = (e) => {
    console.log('Form Submited ', e)
  }

  return (
    <div className="container py-5">
      <h2 className="text-center">Login</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-5">
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {required: {value:true, message: 'This field is required'}})}
              />
              { errors?.email &&
                <Form.Text className="text-danger ps-2">{errors.email.message}</Form.Text>
              }
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {required: {value:true, message: 'This field is required'}, minLength: {value:4, message: 'Min length for password is 4'}})}
              />
              { errors?.password &&
                <Form.Text className="text-danger ps-2">{errors.password.message}</Form.Text>
              }
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
          <DevTool control={control}></DevTool>
        </div>
      </div>
    </div>
  );
};

export default Login;
