import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { BasketCard } from "../components/BasketCard";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          {"ГЛАВНАЯ"}
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          {"ABOUT"}
        </Link>
        <Link to="/products" className="[&.active]:font-bold">
          {"ТОВАРЫ"}
        </Link>
      </div>

      <div className="p-2">
        <Outlet />
      </div>

      <TanStackRouterDevtools />
    </>
  ),
});
