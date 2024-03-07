import Article from "@/components/Article";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-cream h-[100vh]">
      <Navbar/>
      <Article />
    </main>
  );
}
