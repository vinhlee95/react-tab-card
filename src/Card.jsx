import React from "react";

const TabContext = React.createContext();

function CardTab({ children }) {
  const [activeTab, setActiveTab] = React.useState(null);

  const setTab = tab => {
    setActiveTab(tab);
  };

  return (
    <TabContext.Provider value={{ activeTab, setTab }}>
      <div className="">{children}</div>
    </TabContext.Provider>
  );
}

function TabSwitcher({ children, tabId }) {
  const { setTab } = React.useContext(TabContext);
  const onClick = () => setTab(tabId);
  return <button onClick={onClick}>{children}</button>;
}

function TabContent({ children, id }) {
  const { activeTab } = React.useContext(TabContext);
  return id === activeTab ? children : null;
}

export { CardTab, TabSwitcher, TabContent };
