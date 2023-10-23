import { Controller, useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Button from "react-bootstrap/Button";
import { DevTool } from "@hookform/devtools";

const SignUp = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const animatedComponents = makeAnimated();
  const ageOptions = [
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
  ];

  const hoppiesOptions = [
    { value: "Reading", label: "Reading" },
    { value: "Gaming", label: "Gaming" },
    { value: "Writing", label: "Writing" },
    { value: "Drawing", label: "Drawing" },
  ];

  const submitForm = (e) => {
    console.log("Form Submited ", e);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center">Sign up</h2>
      <div className="row justify-content-center mt-5">
        <div className="col-5">
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter user name"
                {...register("userName", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 3, message: "Min length is 3" },
                })}
              />
              {errors?.userName && (
                <Form.Text className="text-danger ps-2">
                  {errors.userName.message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", {
                  required: { value: true, message: "This field is required" },
                })}
              />
              {errors?.email && (
                <Form.Text className="text-danger ps-2">
                  {errors.email.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: { value: true, message: "This field is required" },
                  minLength: {
                    value: 4,
                    message: "Min length for password is 4",
                  },
                })}
              />
              {errors?.password && (
                <Form.Text className="text-danger ps-2">
                  {errors.password.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="confirm Password"
                {...register("confirmPassword", {
                  required: { value: true, message: "This field is required" },
                  validate: (val) =>
                    val === watch("password") || "Password doesn't match",
                })}
              />
              {errors?.confirmPassword && (
                <Form.Text className="text-danger ps-2">
                  {errors.confirmPassword.message}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Age</Form.Label>
              <Controller
                control={control}
                name="age"
                render={({ field: { onChange, value } }) => (
                  <Select
                    options={ageOptions}
                    onChange={onChange}
                    value={value ? value : ""}
                    className="basic-single"
                    classNamePrefix="select"
                    defaultValue={ageOptions[2]}
                  />
                )}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Hoppies</Form.Label>
              <Controller
                control={control}
                name="colors"
                render={({ field: { onChange, value } }) => (
                  <Select
                    isMulti
                    options={hoppiesOptions}
                    onChange={onChange}
                    value={value ? value : []}
                    components={animatedComponents}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                )}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="termsAndCond">
              <Form.Check // prettier-ignore
                type="checkbox"
                id="termsAndCond"
                label="I accept terms and conditions"
                {...register("termsAndCond", { required: true })}
              />
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

export default SignUp;
