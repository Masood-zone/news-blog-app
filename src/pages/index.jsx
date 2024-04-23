import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/layout";

const rootRoutes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route
          index
          lazy={async () => {
            const { default: Home } = await import("./home");
            return { Component: Home };
          }}
        />

        <Route
          path="tech"
          lazy={async () => {
            const { default: Tech } = await import("./tech");
            return { Component: Tech };
          }}
        />
        <Route
          path="health"
          lazy={async () => {
            const { default: Health } = await import("./health");
            return { Component: Health };
          }}
        />
        <Route
          path="entertainment"
          lazy={async () => {
            const { default: Entertainment } = await import("./entertainment");
            return { Component: Entertainment };
          }}
        />
        <Route
          path="sports"
          lazy={async () => {
            const { default: Sports } = await import("./sports");
            return { Component: Sports };
          }}
        />
        <Route
          path="business"
          lazy={async () => {
            const { default: Business } = await import("./business");
            return { Component: Business };
          }}
        />
        <Route
          path="environment"
          lazy={async () => {
            const { default: Environment } = await import(
              "./environment/index"
            );
            return { Component: Environment };
          }}
        />
        <Route
          path="politics"
          lazy={async () => {
            const { default: Politics } = await import("./politics/index");
            return { Component: Politics };
          }}
        />
        <Route
          path="about-us"
          lazy={async () => {
            const { default: AboutUs } = await import("./about/index");
            return { Component: AboutUs };
          }}
        />
      </Route>
    </>
  )
);

export default rootRoutes;
