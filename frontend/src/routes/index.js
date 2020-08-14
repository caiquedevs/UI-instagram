import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageLogin from '../pages/Login';
import Feed from '../pages/Feed';
import Page404 from '../pages/Page404';

export default function Routes() {
   return (
      <Switch>
         <Route exact path="/" component={PageLogin} />
         <Route exact path="/feed/:userId" component={Feed} />
         <Route path="*" component={Page404} />
      </Switch>
   );
}
