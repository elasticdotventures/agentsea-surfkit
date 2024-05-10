import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="https://github.com/agentsea/surfkit"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Github
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="https://github.com/agentsea/surfkit"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Docs
        </a>
      </Typography>
    </ul>
  );
}

export function Nav() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3 w-full min-w-screen-xl">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img
          className="h-10 w-10 rounded-full object-contain object-center rounded-full border border-blue-gray-100 p-1 shadow-xl"
          src="https://storage.googleapis.com/guisurfer-assets/surf_logo_cropped.png"
          alt="logo"
        />

        {/* <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          SurfKit
        </Typography> */}
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
