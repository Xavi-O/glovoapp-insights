import {
  SearchIcon,
  StatusOfflineIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import {
  Badge,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TextInput,
  Title,
} from "@tremor/react";
import { useEffect, useState } from "react";
import React from "react";

export default function Kfc() {
  const [timeData, setTimeData] = useState("Loading...");
  const [all, setall] = useState([{}]);
  const [active, setactive] = useState([{}]);
  const [inactive, setinactive] = useState([{}]);

  //Fetch time and city routes
  async function fetchProducts() {
    const timeResponse = await fetch("https://horrible-bird-24.telebit.io/time");
    const allResponse = await fetch("https://horrible-bird-24.telebit.io/kfc");
    const activeResponse = await fetch("https://horrible-bird-24.telebit.io/kfc/active");
    const inactiveResponse = await fetch("https://horrible-bird-24.telebit.io/kfc/inactive");

    const time = await timeResponse.json();
    setTimeData(time);
    const allProducts = await allResponse.json();
    setall(allProducts);
    setallStatus(allProducts);
    const activeProducts = await activeResponse.json();
    setactive(activeProducts);
    const inactiveProducts = await inactiveResponse.json();
    setinactive(inactiveProducts);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const [allstatus, setallStatus] = useState(all);

  const allStatusFilter = (event) => {
    setallStatus(
      all.filter((row) =>
        row.title.toLowerCase().replaceAll(' ', '').includes(event.target.value.toLowerCase().replaceAll(' ', ''))
      )
    );
  };

  return (
    <>
      <Title>KFC Top Products</Title>
      <Badge color="emerald">{"Updated on " + timeData}</Badge>

      <TabGroup className="">
        <TabList>
          <Tab>All</Tab>
          <Tab>Active</Tab>
          <Tab>Inactive</Tab>
        </TabList>
        <TabPanels>
          {/*All products in all the KFC Stores*/}
          <TabPanel>
            <TextInput
              onChange={allStatusFilter}
              className="mr-4 w-1/4"
              icon={SearchIcon}
              placeholder="Search Product..."
            />
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Location</TableHeaderCell>
                  <TableHeaderCell>Product</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allstatus
                  ? allstatus.map((row, i) => {
                      return (
                        <TableRow>
                          <TableCell>{row.city}</TableCell>
                          <TableCell>{row.address}</TableCell>
                          <TableCell>{row.title}</TableCell>
                          <TableCell>{row.price}</TableCell>
                          <Badge
                            className="bg-transparent"
                            color={row.price === "-" ? "red" : "green"}
                            icon={
                              row.price === "-"
                                ? StatusOfflineIcon
                                : StatusOnlineIcon
                            }
                          >
                            <TableCell>
                              {row.price === "-"
                                ? "Not Available"
                                : "Available"}
                            </TableCell>
                          </Badge>
                        </TableRow>
                      );
                    })
                  : "Loading Data..."}
              </TableBody>
            </Table>
          </TabPanel>
          {/*All active products in all the KFC Stores*/}
          <TabPanel>
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Location</TableHeaderCell>
                  <TableHeaderCell>Product</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {active
                  ? active.map((row, i) => {
                      return (
                        <TableRow>
                          <TableCell>{row.city}</TableCell>
                          <TableCell>{row.address}</TableCell>
                          <TableCell>{row.title}</TableCell>
                          <TableCell>{row.price}</TableCell>
                          <Badge
                            className="bg-transparent"
                            color={row.price === "-" ? "red" : "green"}
                            icon={
                              row.price === "-"
                                ? StatusOfflineIcon
                                : StatusOnlineIcon
                            }
                          >
                            <TableCell>
                              {row.price === "-"
                                ? "Not Available"
                                : "Available"}
                            </TableCell>
                          </Badge>
                        </TableRow>
                      );
                    })
                  : "Loading Data..."}
              </TableBody>
            </Table>
          </TabPanel>
          {/*All inactive products in all the KFC Stores*/}
          <TabPanel>
            <Table className="mt-5">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Location</TableHeaderCell>
                  <TableHeaderCell>Product</TableHeaderCell>
                  <TableHeaderCell>Price</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Automation</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inactive
                  ? inactive.map((row, i) => {
                      return (
                        <TableRow>
                          <TableCell>{row.city}</TableCell>
                          <TableCell>{row.address}</TableCell>
                          <TableCell>{row.title}</TableCell>
                          <TableCell>{row.price}</TableCell>
                          <Badge
                            className="bg-transparent"
                            color={row.price === "-" ? "red" : "green"}
                            icon={
                              row.price === "-"
                                ? StatusOfflineIcon
                                : StatusOnlineIcon
                            }
                          >
                            <TableCell>
                              {row.price === "-"
                                ? "Not Available"
                                : "Available"}
                            </TableCell>
                          </Badge>
                          <TableCell><Badge icon={CheckCircleIcon} className="bg-transparent">WhatsApp</Badge></TableCell>
                        </TableRow>
                      );
                    })
                  : "Loading Data..."}
              </TableBody>
            </Table>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
