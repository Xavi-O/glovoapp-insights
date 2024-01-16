import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import {
  ChartPieIcon,
  HomeIcon,
  OfficeBuildingIcon,
  ShoppingBagIcon,
  StopIcon,
} from "@heroicons/react/solid";
("use client");
import { Tab, TabGroup, TabList } from "@tremor/react";

export default function Root() {
  return (
    <>
      <div className="flex">
        <nav
          className=" m-1 w-min md:w-1/6 h-screen sticky top-0 bg-zinc-50"
          id="sidebar"
        >
          <Link className="" to={`/home`}>
            <img
              className="w-11/12 md:w-1/2 mx-auto mt-2 hidden sm:block"
              alt="glovo logo"
              src="glovo-logo.svg"
            ></img>
            <img
              className="w-4/5 sm:w-1/3 md:mx-auto mt-2 sm:hidden"
              alt="glovo logo"
              src="glovoapp-icon.svg"
            ></img>
          </Link>
          
          <TabGroup className="ml-0 md:ml-4">
            <TabList color="emerald" className="w-5/6 md:w-5/6 lg:w-3/5">
              <NavLink to={`/home`}>
                <Tab className="mt-8" icon={HomeIcon}>
                  <p className="hidden md:block">Home</p>
                </Tab>
              </NavLink>
            </TabList>
            <TabList color="emerald" className="w-5/6 md:w-5/6 lg:w-3/5">
              <NavLink to={`/dashboard`}>
                <Tab className="mt-8" icon={ChartPieIcon}>
                  <p className="hidden md:block">Dashboard</p>
                </Tab>
              </NavLink>
            </TabList>
            <TabList color="emerald" className="w-5/6 md:w-5/6 lg:w-3/5">
              <NavLink to={`/stores`}>
                <Tab className="mt-8" icon={OfficeBuildingIcon}>
                <p className="hidden md:block">Stores</p>
                </Tab>
              </NavLink>
            </TabList>
            <TabList color="emerald" className="w-5/6 md:w-5/6 lg:w-3/5">
              <NavLink to={`/kfc-store`}>
                <Tab className="mt-8" icon={ShoppingBagIcon}>
                <p className="hidden md:block">KFC</p>
                </Tab>
              </NavLink>
            </TabList>
            <TabList color="red" className="w-5/6 md:w-5/6 lg:w-3/5">
              <NavLink to={`/logout`}>
                <Tab className="mt-8" icon={StopIcon}>
                <p className="hidden md:block">Logout</p>
                </Tab>
              </NavLink>
            </TabList>
          </TabGroup>
        </nav>

        <div className="m-1 w-5/6" id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
