import { Formik } from "formik";

interface DynamicFormProps {
  initialValues: any;
  validate: (values: any) => any;
  onSubmit: (values: any) => void;
  fields: {
    name: string;
    type: string;
    placeholder: string;
  }[];
}

export const DynamicForm = (props: DynamicFormProps) => {
  return <Formik>{props.children}</Formik>;
};
