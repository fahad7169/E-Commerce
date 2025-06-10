import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Link } from "react-router-dom";


const AccountDropdown = ({ logout }) => {

  return (
    <DropdownMenu>
    <DropdownMenuTrigger className="focus:outline-none hidden xs:block">
      <span className="material-symbols-outlined text-black cursor-pointer">
        account_circle
      </span>
    </DropdownMenuTrigger>
  
    <DropdownMenuContent
        className="z-[1000] w-60 p-2"
        style={{
            background: "rgba( 22, 35, 34, 0.9)",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur(16.5px)",
          WebkitBackdropFilter: "blur(16.5px)",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
      
      <DropdownMenuItem asChild className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-700">
        <Link to="/manage-account" className="flex items-center gap-3 w-full text-white">
          <span className="material-symbols-outlined">person</span>
          Manage My Account
        </Link>
      </DropdownMenuItem>
  
      <DropdownMenuItem asChild className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-700">
        <Link to="/orders" className="flex items-center gap-3 w-full text-white">
          <span className="material-symbols-outlined">inventory_2</span>
          My Order
        </Link>
      </DropdownMenuItem>
  
      <DropdownMenuItem asChild className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-700">
        <Link to="/cancellations" className="flex items-center gap-3 w-full text-white">
          <span className="material-symbols-outlined">cancel</span>
          My Cancellations
        </Link>
      </DropdownMenuItem>
  
      <DropdownMenuItem asChild className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-700">
        <Link to="/reviews" className="flex items-center gap-3 w-full text-white">
          <span className="material-symbols-outlined">star</span>
          My Reviews
        </Link>
      </DropdownMenuItem>
  
      <DropdownMenuSeparator className="bg-gray-600 my-2" />
  
      <DropdownMenuItem onClick={logout} className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-700 text-white">
        <span className="material-symbols-outlined">logout</span>
        Logout
      </DropdownMenuItem>
  
    </DropdownMenuContent>
  </DropdownMenu>
  
  );
};

export default AccountDropdown;
