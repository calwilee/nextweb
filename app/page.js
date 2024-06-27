import Image from "next/image";

import  Description  from "./components/description";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Projectsection from "./components/Projectsection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[url('./images/pillars.jpg')] bg-cover ">
      <Navbar/>
      <div className = "container mt-20 mx-auto px-12 py-4 ">
        <Description />
        <Aboutme/>
        <Projectsection/>
      </div>
      <Footer/>

    </main>
  );
} 
