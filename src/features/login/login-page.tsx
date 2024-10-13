import { useLogin } from "@api/auth";
import { Card, Input } from "@components/ui";
import { Form, Formik } from "formik";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { mutateAsync } = useLogin();

  const signIn = async (data: Inputs) => {
    return await mutateAsync({ ...data });
  };

  return (
    <div className="w-full h-screen border flex items-center justify-center">
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors: { [key: string]: string } = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          signIn(values).then(() => setSubmitting(false));
          setSubmitting(true);
        }}
      >
        {({ values, handleChange, errors, touched, isSubmitting }) => (
          <Card className="px-6 py-8 bg-gray-200">
            <Form className="flex flex-col gap-4">
              <Input
                className="bg-white"
                type="email"
                name="email"
                placeholder="Seu email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <Input
                className="bg-white"
                type="password"
                name="password"
                placeholder="Sua senha"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 bg-black text-white py-2 rounded-md"
              >
                Submit
              </button>
            </Form>
          </Card>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
