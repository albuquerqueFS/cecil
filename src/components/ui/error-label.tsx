import { PropsWithChildren } from "react";

const ErrorLabel = ({ children, ...props }: PropsWithChildren<any>) => (
  <span className="text-red-600 font-light text-sm" {...props}>
    {children}
  </span>
);

export default ErrorLabel;
