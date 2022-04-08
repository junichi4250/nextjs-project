import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <p className="text-4xl">Hello Next.js</p>
    </Layout>
  );
}
