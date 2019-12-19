import React, { useState } from "react";
import { Spin, Empty, Button, Input, Divider } from "antd";
import { GridBodyWrapper, GridHeaderWrapper } from "./style";
import Grid from "./Grid";
const { Search } = Input;

const endpoint = "https://reqres.in/api/users";

const GridContainer = () => {
  const [isLoading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    console.log("Start loading !");
    setLoading(true);
    console.log("Calling API...");
    const response = await fetch(endpoint);
    const { data } = await response.json();
    setTimeout(() => {
      console.log("Received Data !");
      setLoading(false);
      console.log("Stopped loading !");
      setUsers(data);
    }, 1000);
  };

  const searchUser = async id => {
    console.log("Start loading !");
    setLoading(true);
    console.log("Calling API for Seach...", id);
    const response = await fetch(`${endpoint}/${id}`);
    const { data } = await response.json();
    console.log("Received Data !");
    setLoading(false);
    console.log("Stopped loading !");
    const users = Array.isArray(data) ? data : [data];
    setUsers(users);
  };

  const MemoizedGrid = React.memo(Grid);

  return (
    <>
      <GridHeaderWrapper>
        <div>
          <Button
            type="primary"
            icon="usergroup-add"
            loading={isLoading}
            onClick={fetchUsers}
          >
            Load Users
          </Button>
        </div>
        <div>
          <Search
            allowClear
            placeholder="Search user"
            disabled={isLoading}
            onSearch={searchUser}
            enterButton
          />
        </div>
      </GridHeaderWrapper>
      <Divider />
      <Spin spinning={isLoading}>
        {users.length ? (
          <GridBodyWrapper>
            <MemoizedGrid users={users} />
          </GridBodyWrapper>
        ) : (
          <Empty />
        )}
      </Spin>
    </>
  );
};

export default GridContainer;
