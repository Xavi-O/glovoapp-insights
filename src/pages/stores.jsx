import {
  SearchIcon,
  StatusOfflineIcon,
  StatusOnlineIcon,
} from "@heroicons/react/outline";
import {
  Badge,
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

export default function Stores() {
  const [isLoading, setIsLoading] = useState(false);
  const [backendData, setBackendData] = useState([{}]);
  const [timeData, setTimeData] = useState("Loading...");

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch("https://horrible-bird-24.telebit.io/stores"),
      fetch("https://horrible-bird-24.telebit.io/time"),
    ])
      .then(([resStores, resTime]) =>
        Promise.all([resStores.json(), resTime.json()])
      )
      .then(([dataStores, dataTime]) => {
        setBackendData(dataStores);
        setInput(dataStores);
        setTimeData(dataTime);
        setIsLoading(false);
      });
  }, []);

  const [input, setInput] = useState(backendData);

  const nameSearch = (event) => {
    setInput(
      backendData.filter((row) =>
        row.storename.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Title>KE Stores Status</Title>
      <Badge color="emerald">{"Updated on " + timeData}</Badge>
      <TextInput
        onChange={nameSearch}
        className="mt-4 w-1/4"
        icon={SearchIcon}
        placeholder="Search..."
      />
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>City</TableHeaderCell>
            <TableHeaderCell>Store</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {input
            ? input.map((row, i) => {
                return (
                  <TableRow>
                    <TableCell>{row.city}</TableCell>
                    <TableCell>{row.storename}</TableCell>
                    <Badge
                      className="bg-transparent"
                      color={
                        row.storestatus === "Open"
                          ? "green"
                          : row.storestatus === "Temporarily closed"
                          ? "red"
                          : "yellow"
                      }
                      icon={
                        row.storestatus === "Open"
                          ? StatusOnlineIcon
                          : StatusOfflineIcon
                      }
                    >
                      <TableCell>{row.storestatus}</TableCell>
                    </Badge>
                  </TableRow>
                );
              })
            : "Loading Data"}
        </TableBody>
      </Table>
    </>
  );
}
