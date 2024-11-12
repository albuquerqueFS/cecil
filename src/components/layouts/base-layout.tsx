import StocksHeader from "@components/independent/stock-header/stocks-header";
import UserHeader from "@components/ui/user-header";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "src/providers/auth-provider";

const BaseLayout: FC = () => {
  const { token } = useAuth();

  if (!token) {
    console.log({ token });
    return <Navigate to="/auth/login" />;
  }

  return (
    <div>
      <div className="max-w-[1100px] mx-auto">
        <div className="flex justify-between">
          <StocksHeader />
          <UserHeader />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
