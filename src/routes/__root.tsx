import { Outlet, createRootRoute, useMatches } from "@tanstack/react-router";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Fragment } from "react/jsx-runtime";
import { Header } from "../components/Header";
import { Typography } from "../shared/ui/Typography";
import { COLOR_TEXT } from "../shared/ui/color";
import { Card } from "../shared/ui/Card";

export const Route = createRootRoute({
  component: () => {
    const matches = useMatches();
    const title = matches[matches.length - 1 ].staticData.title
    return (
      <>
      <Fragment>
        {!!title && (
          <Header>
            <Typography size={24}
            color={COLOR_TEXT.alternative}
            align="center">
              {title ?? ""}
            </Typography>
          </Header>
        )}
      </Fragment>

      
        <div className="p-2">
          <Outlet />
        </div>

        <TanStackRouterDevtools />
      </>
    );
  },
});
