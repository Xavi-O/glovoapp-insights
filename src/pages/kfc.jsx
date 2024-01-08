import {
  LightBulbIcon,
  SearchIcon,
  StatusOfflineIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";
import {
  Badge,
  Flex,
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
  const [isLoading, setIsLoading] = useState(false);
  const [backendData, setBackendData] = useState([{}]);
  const [timeData, setTimeData] = useState("Loading...");

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch("https://horrible-bird-24.telebit.io/kfc"),
      fetch("https://horrible-bird-24.telebit.io/time"),
    ])
      .then(([resStores, resTime]) =>
        Promise.all([resStores.json(), resTime.json()])
      )
      .then(([dataStores, dataTime]) => {
        setBackendData(dataStores);
        setStatus(dataStores);
        setTimeData(dataTime);
        setIsLoading(false);
      });
  }, []);

  const [status, setStatus] = useState(backendData);

  const statusFilter = (event) => {
    setStatus(
      backendData.filter((row) =>
        row.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Title>KFC Top Products</Title>
      <Flex>
        <Badge color="emerald">{"Updated on " + timeData}</Badge>
        <TextInput
          onChange={statusFilter}
          className="mr-4 w-1/4"
          icon={SearchIcon}
          placeholder="Search Product..."
        />
      </Flex>
      <Badge className="italic font-thin" color="black" icon={LightBulbIcon}>
        HINT: Search "Missing" to view all unavailable products
      </Badge>

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
          {status
            ? status.map((row, i) => {
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
                        row.price === "-" ? StatusOfflineIcon : StatusOnlineIcon
                      }
                    >
                      <TableCell>
                        {row.price === "-" ? "Not Available" : "Available"}
                      </TableCell>
                    </Badge>
                  </TableRow>
                );
              })
            : "Loading Data..."}
        </TableBody>
      </Table>
    </>
  );
}
