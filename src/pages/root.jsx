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
          className=" m-1 w-1/6 h-full sticky top-0 bg-zinc-50"
          id="sidebar"
        >
          <Link className="" to={`/home`}>
            <img
              className="w-1/2 mx-auto mt-2"
              alt="glovo logo"
              src="glovo-logo.svg"
            ></img>
          </Link>
          
          <TabGroup className="ml-4">
            <TabList color="emerald" className="w-3/5">
              <NavLink to={`/home`}>
                <Tab className="mt-8" icon={HomeIcon}>
                  Home
                </Tab>
              </NavLink>
            </TabList>
            <TabList color="emerald" className="w-3/5">
              <NavLink to={`/dashboard`}>
                <Tab className="mt-8" icon={ChartPieIcon}>
                  Dashboard
                </Tab>
              </NavLink>
            </TabList>
            <TabList color="emerald" className="w-3/5">
              <NavLink to={`/stores`}>
                <Tab className="mt-8" icon={OfficeBuildingIcon}>
                  Stores
                </Tab>
              </NavLink>
            </TabList>
            <TabList color="emerald" className="w-3/5">
              <NavLink to={`/kfc-store`}>
                <Tab className="mt-8" icon={ShoppingBagIcon}>
                  KFC
                </Tab>
              </NavLink>
            </TabList>
            <TabList color="red" className="w-3/5">
              <NavLink to={`/logout`}>
                <Tab className="mt-8" icon={StopIcon}>
                  Logout
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
