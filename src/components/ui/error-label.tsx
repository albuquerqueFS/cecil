import { PropsWithChildren } from "react"

const ErrorLabel = ({ children, ...props }: PropsWithChildren<any>) => (
    <span className="text-sm font-light text-red-600" {...props}>
        {children}
    </span>
)

export default ErrorLabel
