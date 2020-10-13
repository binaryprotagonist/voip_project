import React from 'react';

const Dashboard = React.lazy(() => import('./views/Dashboard'));
// const SetPassword = React.lazy(()=>import('./views/Pages/Register/setpassword'))
const routes = [
  { path: '/', exact: true, name: 'Home' }, 
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/setpassword', name: 'Set_Password', component: SetPassword },
];

export default routes;
