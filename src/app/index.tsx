import { Redirect } from 'expo-router';
let auth = false;

const index = () => {
  // For some reason, root layout doesn't redirect to the dashboard
  // Instead we do manually here
  // if (auth) {
  //   return <Redirect href='home' />;
  // }else{
  //   return <Redirect href='sign-in' />;
  // }
  return <Redirect href='sign-in' />;
  
};

export default index;
