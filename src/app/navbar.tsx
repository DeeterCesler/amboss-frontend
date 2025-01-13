import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center p-4 amboss-border-bottom">
          <div className="flex items-center space-x-8">
            {/* logo */}
            <Link className="link" href="/">
              <Image src="/logo.png" alt="logo" width={120} height={16} />
            </Link>
            {/* links to Products, Marketplace, Stats, Pricing, Communities */}
            <Link className="link" href="/products">Products</Link>
            <Link className="link" href="/marketplace">Marketplace</Link>
            <Link className="link" href="/stats">Stats</Link>
            <Link className="link" href="/pricing">Pricing</Link>
            <Link className="link" href="/communities">Communities</Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* Search box with icon inside */}
            <label htmlFor="search">
              <div className="relative flex items-center lg:w-80 w-full">
                  <input
                      id="search"
                      type="text"
                      placeholder="Search"
                      className="w-full p-2 pl-4 rounded-lg bg-transparent amboss-border focus:outline-none"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                  />
                  <Image
                      src="/search-icon.svg"
                      alt="search-icon"
                      width={20}
                      height={20}
                      className="absolute right-3"
                  />
              </div>
            </label>
            <button className="w-36 p-2 rounded-lg amboss-border text-white">
              <div className="inline-block">
                <Image
                  src="/dashboard-icon.svg"
                  alt="dashboard-icon"
                  width={20}
                  height={20}
                  className="inline-block"
                />
                <span className="inline-block ml-2 hidden lg:inline">Dashboard</span>
              </div>
            </button>
            <Image
              src="/pfp.png"
              alt="pfp"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </nav>
    );
};

export default NavBar;