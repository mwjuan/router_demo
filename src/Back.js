import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from 'antd';

const Back = ({ history }) => <Button onClick={history.goBack}>Back</Button>;

export default withRouter(Back);
