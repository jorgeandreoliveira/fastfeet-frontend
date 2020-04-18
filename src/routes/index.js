import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import DeliveryList from '~/pages/Delivery/List';
import DeliveryStore from '~/pages/Delivery/Store';
import RecipientList from '~/pages/Recipient/List';
import RecipientStore from '~/pages/Recipient/Store';
import DeliveryManList from '~/pages/DeliveryMan/List';
import DeliveryManStore from '~/pages/DeliveryMan/Store';
import DeliveryProblemList from '~/pages/DeliveryProblem/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Login" component={Login} />
      <Route path="/DeliveryList" component={DeliveryList} isPrivate />
      <Route path="/RecipientList" component={RecipientList} isPrivate />
      <Route path="/DeliveryManList" component={DeliveryManList} isPrivate />
      <Route
        path="/DeliveryProblemList"
        component={DeliveryProblemList}
        isPrivate
      />
      <Route path="/DeliveryStore/:id" component={DeliveryStore} isPrivate />
      <Route
        path="/DeliveryManStore/:id"
        component={DeliveryManStore}
        isPrivate
      />
      <Route path="/RecipientStore/:id" component={RecipientStore} isPrivate />
    </Switch>
  );
}
