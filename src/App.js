import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from './components/layout/Layout';

const AllMeetupsPage = React.lazy(() => import('./pages/AllMeetups'))
const NewMeetupPage = React.lazy(() => import('./pages/NewMeetup'))
const FavoritesPage = React.lazy(() => import('./pages/Favorites'))

function App() {
  return <Layout>
    <Suspense fallback={<div className='centered'>Loading...</div>}>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Suspense>
  </Layout>;
}

export default App;
