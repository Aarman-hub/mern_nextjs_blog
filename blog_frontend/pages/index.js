import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title={"Home"}>
      <h1>Home</h1>
    </Layout>
  )
}
