import React from "react";
import { CardTab, TabSwitcher, TabContent } from "./Card";

import "./styles.css";
import "./tailwind.css";

export default function App() {
  return (
    <div className="m-8 bg-gray-200 rounded-sm shadow-lg">
      <CardTab>
        <div>
          <TabSwitcher tabId={1}>
            <div className="p-2">Tab 1</div>
          </TabSwitcher>
          <TabSwitcher tabId={2}>
            <div className="p-2">Tab 2</div>
          </TabSwitcher>
        </div>
        <div className="p-2">
          <TabContent id={1}>Tab content 1</TabContent>
          <TabContent id={2}>Tab content 2</TabContent>
        </div>
      </CardTab>
    </div>
  );
}
