import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useRouteMatch } from "react-router";
import { Link, Switch, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import InsertItem from "../InsertItem/InsertItem";
import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";
import ManageProducts from "../ManageProducts/ManageProducts";
import AdminRole from "../AdminRole/AdminRole";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import AdminRoute from "../AdminRoute/AdminRoute";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Container>
        <h1 className="text-center fw-bold my-5">Dashboard</h1>
        <Row>
          <Col sm={12} lg={3} className="border-end">
            <ul>
              <li>
                <Link to={`${url}/myOrder`}>My Order</Link>
              </li>
              <li>
                <Link to={`${url}/payment`}>Payment</Link>
              </li>
              <li>
                <Link to={`${url}/review`}>Review</Link>
              </li>
              {admin && (
                <>
                  <li>
                    <Link to={`${url}/manageOrder`}>Manage All Order</Link>
                  </li>
                  <li>
                    <Link to={`${url}/insertItem`}>Insert Item</Link>
                  </li>
                  <li>
                    <Link to={`${url}/manageProduct`}>Manage All Product</Link>
                  </li>
                  <li>
                    <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                  </li>
                </>
              )}
              <li>
                <Button onClick={logOut} variant="danger">
                  Log Out
                </Button>
              </li>
              <br />
              <li>
                <Link to="/">Back to home</Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} lg={9}>
            <Switch>
              <Route exact path={path}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/myOrder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <AdminRoute path={`${path}/manageOrder`}>
                <ManageAllOrder></ManageAllOrder>
              </AdminRoute>
              <AdminRoute path={`${path}/insertItem`}>
                <InsertItem></InsertItem>
              </AdminRoute>
              <AdminRoute path={`${path}/manageProduct`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <AdminRole></AdminRole>
              </AdminRoute>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
