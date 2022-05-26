import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}
