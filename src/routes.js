import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
// const SetPassword = React.lazy(()=>import('./views/Pages/Register/setpassword'))
const Activity_Feeds =React.lazy(()=>import('./views/Activity_Feeds/index'))
const Users = React.lazy(()=>import('./views/Users/index'))
const Numbers = React.lazy(()=>import('./views/Numbers/index'))
const routes = [
  { path: '/', exact: true, name: 'Home' }, 
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/activity_feeds', name: 'Activityn Feeds', component: Activity_Feeds },
  { path: '/users', name: 'Users', component: Users },
  { path: '/numbers', name: 'Numbers', component: Numbers },
  // { path: '/setpassword', name: 'Set_Password', component: SetPassword },
];

export default routes;
