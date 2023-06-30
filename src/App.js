import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Feed, Header, SearchResult, VideoDetails } from "./components/index";
import { AppContext } from "./context/contextApi";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/video/:Id" element={<VideoDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
