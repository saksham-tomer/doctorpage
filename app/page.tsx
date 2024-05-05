import Image from "next/image";
import { Nav } from "./components/nav";

export default function Home() {
  return (
    <main>
      <div className="relative overflow-hidden bg-gradient-radial from-white to-blue-800 flex felx-col items-center min-h-screen justify-center">
        <div className="overflow-hidden ">
          <div>Dashboard</div>
        </div>
      </div>
    </main>
  );
}
