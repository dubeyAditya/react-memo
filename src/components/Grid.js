import React from "react";
import { Card, Icon } from "antd";
import { GridWrapper } from "./style";

let count = 1;
const Grid = ({ users }) => {
  console.log(`I am Grid... About to render ${[count++]} time(s) !`);

  const getCardList = () =>
    users.map(user => (
      <Card
        size="small"
        hoverable
        key={user.id}
        cover={<img alt="user" src={user.avatar} />}
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Card.Meta
          title={user.first_name + " " + user.last_name}
          description={user.email}
        />
      </Card>
    ));

  return <GridWrapper>{getCardList()}</GridWrapper>;
};

export default Grid;
