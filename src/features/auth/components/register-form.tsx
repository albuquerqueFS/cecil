import { useRegister } from "@api/auth";
import { Button, Card, CardContent, CardTitle, Input } from "@components/ui";
import { Form, Formik } from "formik";

import CecilLogo from "../../../assets/cecil.svg";
import ErrorLabel from "@components/ui/error-label";
import { toast } from "sonner";
import Spinner from "@components/ui/spinner";
import { Link } from "react-router-dom";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { mutateAsync, isPending } = useRegister();

  const signUp = async (data: Inputs) => {
    mutateAsync({ ...data })
      .then(() => {
        toast.success("Conta criada com sucesso");
      })
      .catch((error) => {
        if (error.response.data) {
          if (error.response.data.email) {
            toast.error("Este e-mail já está em uso");
          }
        }
      });
  };

  return (
    <Formik
      initialValues={{ email: "", name: "", password: "" }}
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
      onSubmit={(values) => {
        signUp(values);
      }}
    >
      {({ values, handleChange, errors, touched }) => (
        <Card className="shadow-md">
          <CardTitle>
            <div className="py-4 flex justify-center items-center">
              <img src={CecilLogo} alt="Logo" className="w-20" />
            </div>
          </CardTitle>
          <CardContent>
            <Form
              className="flex flex-col items-center gap-4"
              style={{
                visibility: isPending ? "hidden" : "unset",
              }}
            >
              <Input
                className="bg-white"
                type="name"
                name="name"
                placeholder="Seu nome"
                onChange={handleChange}
                value={values.name}
              />
              {errors.name && touched.name && errors.name && (
                <ErrorLabel>{errors.name}</ErrorLabel>
              )}

              <Input
                className="bg-white"
                type="email"
                name="email"
                placeholder="Seu email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email && errors.email && (
                <ErrorLabel>{errors.email}</ErrorLabel>
              )}
              <Input
                className="bg-white"
                type="password"
                name="password"
                placeholder="Sua senha"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password && errors.password && (
                <ErrorLabel>{errors.password}</ErrorLabel>
              )}
              <div className="flex flex-col gap-2">
                <Button
                  type="submit"
                  className="mt-4 bg-black text-white rounded-md"
                >
                  Cadastrar
                </Button>
                <Link to="/auth/login">
                  <Button variant="link">Já tenho uma conta</Button>
                </Link>
              </div>
            </Form>
            {isPending && (
              <span className="absolute flex flex-col gap-2 items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Spinner />
                Carregando
              </span>
            )}
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};

export default RegisterForm;
