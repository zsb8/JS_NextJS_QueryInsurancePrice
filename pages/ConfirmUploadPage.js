import { Button, Select, Input } from "antd";
import React, { useState } from "react";
import styles from "./index.module.scss";
import "antd/dist/antd.css";
const ConfirmUploadPage = ({
  saveCharityCSV,
  fileName,
  setUser,
  setPassword,
  setServer,
  setDatabase,
  setCollection,
}) => {
  const { Option } = Select;
  const handleChangeServer = (value) => {
    setServer(value);
  };
  const handleChangeDatabase = (value) => {
    setDatabase(value);
  };
  const handleChangeCollection = (value) => {
    setCollection(value);
  };
  return (
    <>
      <div>
        <div className={styles.grid1}>
          <div className={styles.card}>
            <div className={styles.confirmPage1}>
              <div className={styles.confirmPageCard}>
                <div>
                  <h3>Uploading have Done &rarr;</h3>
                </div>
                <div className={styles.words_black}>
                  File name: "{fileName}".
                  <br />
                </div>
                <div className={styles.words_black}>
                  Would you lik to ETL to MongoDB?
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardServer}>
            <div className={styles.confirmPageServer}>
              <div>
                <h1>Mango UserName: </h1>
              </div>
              <div>
                <Input
                  placeholder="Use Default .env.local"
                  onChange={(e) => setUser(e.target.value.trim())}
                />
              </div>
              <div>
                <h1>Mango Password: </h1>
              </div>
              <div>
                <Input.Password
                  placeholder="Use Default .env.local"
                  onChange={(e) => setPassword(e.target.value.trim())}
                />
              </div>
              <div>
                <h2>Server: </h2>
              </div>
              <div>
                <Select
                  defaultValue="waybase-dev.wdylk.mongodb.net"
                  onChange={handleChangeServer}
                  className={styles.selectWidth}
                >
                  <Option value="waybase-dev.wdylk.mongodb.net">WB Dev</Option>
                  <Option value="waybase-prod.wdylk.mongodb.net" disabled>
                    WB Prod
                  </Option>
                  <Option value="192.168.1.101">Local VM</Option>
                </Select>
              </div>
              <div>
                <h2>Database:</h2>
              </div>
              <div>
                <Select
                  defaultValue="charity"
                  onChange={handleChangeDatabase}
                  className={styles.selectWidth}
                >
                  <Option value="charity">charity</Option>
                  <Option value="testdb">testdb</Option>
                </Select>
              </div>
              <div>
                <h2>Collection:</h2>{" "}
              </div>
              <div>
                <Select
                  defaultValue="charities"
                  onChange={handleChangeCollection}
                  className={styles.selectWidth}
                >
                  <Option value="charities">charities</Option>
                  <Option value="charities2">charities2</Option>
                  <Option value="test">test</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.setCenter}>
          <Button
            onClick={saveCharityCSV}
            type="primary"
            className={styles.bottomConfirm}
          >
            Yes
          </Button>
        </div>
      </div>
    </>
  );
};

export default ConfirmUploadPage;
