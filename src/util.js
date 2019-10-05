import Bootstrap4 from './components/bootstrap4/index';
import Bootstrap3 from './components/bootstrap3/index';


export const APP_NAME = `${process.env.REACT_APP_APP_NAME}`

export const routes = [
  {
    path: `/${APP_NAME}/bootstrap4`,
    component: Bootstrap4,
    exact: true
  },
  {
    path: `/${APP_NAME}/bootstrap3`,
    component: Bootstrap3,
    exact: true
  }
]