import React from 'react';
import Layout from '../components/Layout';
import Slider from '../components/Slider';
import { useAuth } from '../context/auth';

const Home = () => {

    const {auth, setAuth} = useAuth();

  return (
    <>
    <Layout title={"Shopswifty - Online Shoping Site - Home"}>
        <div><Slider/></div>
        <pre>
          {JSON.stringify(auth, null, 4)}
        </pre>

        </Layout>
        </>
  );
};

export default Home
