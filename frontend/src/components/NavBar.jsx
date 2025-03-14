import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

// * The navbar component.

function NavBar() {
  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-content/10 sticky top-0 z-50">
      {/* The navbar container. */}
      <div className="max-w-7xl mx-auto">
        {/* The navbar content. */}
        <div className="navbar px-4 min-h-[4rem] justify-between">
          {/* The logo. */}
          <div className="flex-1 lg;flex-none">
            <Link to="/" className="hover;opacity-80 transition-opacity">
              <div className="flex items-center gap-2">
                <ShoppingCart className="size-9 text-primary" />
                <span className="font-semibold font-mono tracking-widest text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  POSGRESTOR
                </span>
              </div>
            </Link>
          </div>
          {/* The right side of the navbar. */}
        </div>
      </div>
    </div>
    
  );
}


export default NavBar;
