import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AnimationRoutes, App, SnackbarProvider } from "zmp-ui";
import HomePage from "../pages/Home";
import TripPage from "../pages/Trip";
import NotificationPage from "../pages/Notification";
import UserPage from "../pages/User";
import { BottomNavigation } from "./bottom-navigation";

const MyApp = () => {
  return (
    <BrowserRouter>
      <App>
        <SnackbarProvider>
          <AnimationRoutes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/trip" element={<TripPage></TripPage>}></Route>
            <Route
              path="/notification"
              element={<NotificationPage></NotificationPage>}
            ></Route>
            <Route path="/user" element={<UserPage></UserPage>}></Route>
          </AnimationRoutes>
          <BottomNavigation />
        </SnackbarProvider>
      </App>
    </BrowserRouter>
  );
};
export default MyApp;
