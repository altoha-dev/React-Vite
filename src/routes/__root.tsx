import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { BasketCard } from "../components/BasketCard";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          {"ГЛАВНАЯ"}
        </Link>
        <Link to="/second" className="[&.active]:font-bold">
          {"SECOND"}
        </Link>
      </div>

      <Outlet />
    </>
  ),
});
