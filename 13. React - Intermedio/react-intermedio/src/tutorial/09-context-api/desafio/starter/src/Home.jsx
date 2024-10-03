import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

export default function Home() {
  // ir buscar valores ao context

  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button type="submit" className="btn">
        Show Modal
      </button>
    </main>
  );
}
