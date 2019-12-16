import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabComponent = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>
      <TabPanel>
        <h2>Content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Content 2</h2>
      </TabPanel>
    </Tabs>
  );
}

export default TabComponent;
