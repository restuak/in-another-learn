import "./navbar.css";
export default function Navbar() {
  return (
    <div className="h12 p-2.5 bg-black text-white flex justify-between p-2.5">
      <div className="text-3x1"> LOGO </div>
      <div className="flex gap-5 mr-5">
        <button className="button figtree-normal">Login</button>
        <button className="button figtree-normal">Register</button>
      </div>
    </div>
  );
}

