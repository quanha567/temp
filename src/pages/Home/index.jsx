import React from "react";
import { Icon, Tabs, List, Avatar, Page } from "zmp-ui";

const HomePage = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const users = Array.from(Array(10).keys()).map((i) => ({
    name: `Người dùng ${i}`,
    avatar: alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase(),
    online: Math.floor(Math.random() * 10) % 2 === 0,
    key: i,
  }));

  return (
    <Page>
      <Tabs id="contact-list">
        <Tabs.Tab key="tab1" label="Tab 1">
          <List>
            {users.map((user) => (
              <List.Item
                key={user.key}
                prefix={<Avatar online={user.online}>{user.avatar}</Avatar>}
                title={user.name}
                subTitle="subtitle"
                suffix={<Icon icon="zi-call" />}
              />
            ))}
          </List>
        </Tabs.Tab>
        <Tabs.Tab key="tab2" label="Tab 2">
          Tab 2 content
        </Tabs.Tab>
        <Tabs.Tab key="tab3" label="Tab 3">
          Tab 3 content
        </Tabs.Tab>
      </Tabs>
    </Page>
  );
};

export default HomePage;
