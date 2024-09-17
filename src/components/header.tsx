import { Settings } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-[#7440C0] text-white p-2">
      <div className="flex items-center">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ubichek-19fOVRyodppEvzsaNmATfoecoI8gQ5.png"
          alt="UbiCheck Logo"
          className="h-10 w-10 mr-2"
        />
        <h1
          className="text-xl font-bold"
          style={{ fontFamily: "'Harlow Solid Italic, cursive'" }}
        >
          UbiCheck
        </h1>
      </div>
      
    </div>
  );
}
