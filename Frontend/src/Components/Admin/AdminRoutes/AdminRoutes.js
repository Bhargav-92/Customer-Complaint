import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import ListOfComplaints from "./scenes/ListOfComplains/index";
import ListOfusers from "./scenes/AllUsers/index";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

/**
 * The main routing component for the admin panel.
 *
 * This component renders the topbar and sidebar and routes all the
 * components of the admin panel.
 */
function AdminRoutes() {
  /**
   * The current theme and color mode of the app.
   * @type {Object}
   */
  const { theme, colorMode } = useMode();

  /**
   * Renders the admin panel.
   * @return {ReactElement} The admin panel.
   */
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/listofusers" element={<ListOfusers />} />
              <Route path="/listofcomplaints" element={<ListOfComplaints />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}



export default AdminRoutes;
