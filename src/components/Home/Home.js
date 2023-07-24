import React from "react";

import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";

function Home() {
    const isAuthenticated = true;
  return isAuthenticated ? <Dashboard /> : <LandingPage />;
}

export default Home;
