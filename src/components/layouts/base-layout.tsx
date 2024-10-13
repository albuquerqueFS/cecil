import StocksHeader from "@components/independent/stock-header/stocks-header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const BaseLayout: FC = () => {
  return (
    <div>
      <div className="max-w-[1100px] mx-auto">
        <div>
          <StocksHeader />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
