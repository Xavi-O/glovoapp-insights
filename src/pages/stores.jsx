import {
  InformationCircleIcon,
} from "@heroicons/react/outline";
/*import {
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

export default function Stores() {
  const [timeData, setTimeData] = useState("Loading...");
  const [nbo, setnbo] = useState([{}]);
  const [mbs, setmbs] = useState([{}]);
  const [ksm, setksm] = useState([{}]);
  const [nak, setnak] = useState([{}]);
  const [eld, seteld] = useState([{}]);
  const [syo, setsyo] = useState([{}]);
  const [nrk, setnrk] = useState([{}]);
  const [thk, setthk] = useState([{}]);
  const [dia, setdia] = useState([{}]);

  //Fetch time and city routes
  async function fetchCities() {
    const timeResponse = await fetch(
      "https://horrible-bird-24.telebit.io/time"
    );
    const nboResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/nairobi"
    );
    const mbsResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/mombasa"
    );
    const ksmResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/kisumu"
    );
    const nakResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/nakuru"
    );
    const eldResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/eldoret"
    );
    const syoResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/syokimau"
    );
    const nrkResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/ngong-rongai-karen"
    );
    const thkResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/thika"
    );
    const diaResponse = await fetch(
      "https://horrible-bird-24.telebit.io/stores/diani"
    );

    const time = await timeResponse.json();
    setTimeData(time);
    const nboStores = await nboResponse.json();
    setnbo(nboStores);
    setNboSearch(nboStores);
    const mbsStores = await mbsResponse.json();
    setmbs(mbsStores);
    const ksmStores = await ksmResponse.json();
    setksm(ksmStores);
    const nakStores = await nakResponse.json();
    setnak(nakStores);
    const eldStores = await eldResponse.json();
    seteld(eldStores);
    const syoStores = await syoResponse.json();
    setsyo(syoStores);
    const nrkStores = await nrkResponse.json();
    setnrk(nrkStores);
    const thkStores = await thkResponse.json();
    setthk(thkStores);
    const diaStores = await diaResponse.json();
    setdia(diaStores);
  }

  useEffect(() => {
    fetchCities();
  }, []);

  const [nboSearch, setNboSearch] = useState(nbo);

  const searchStore = (event) => {
    setNboSearch(
      nbo.filter((row) =>
        row.storename
          .toLowerCase()
          .replaceAll(" ", "")
          .includes(event.target.value.toLowerCase().replaceAll(" ", ""))
      )
    );
  };

  return (
    <>
      <Title>KE Stores Status</Title>
      <Badge color="emerald">{"Updated on " + timeData}</Badge>
      <TabGroup className="">
        <TabList>
          <Tab>NBO</Tab>
          <Tab>MBS</Tab>
          <Tab>KSM</Tab>
          <Tab>NAK</Tab>
          <Tab>ELD</Tab>
          <Tab>SYO</Tab>
          <Tab>NRK</Tab>
          <Tab>THK</Tab>
          <Tab>DIA</Tab>
        </TabList>
        <TabPanels>
          {/*Tne table list for NBO stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>
                    <TextInput
                      onChange={searchStore}
                      className="ml-1 w-1/2 border-none"
                      icon={SearchIcon}
                      placeholder="Store"
                    />
                  </TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nboSearch
                  ? nboSearch.map((row, i) => {
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
          </TabPanel>
          {/*Tne table list for MBS stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Store</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mbs
                  ? mbs.map((row, i) => {
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
          </TabPanel>
          {/*Tne table list for KSM stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Store</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ksm
                  ? ksm.map((row, i) => {
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
          </TabPanel>
          {/*Tne table list for NAK stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Store</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nak
                  ? nak.map((row, i) => {
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
          </TabPanel>
          {/*Tne table list for ELD stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Store</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {eld
                  ? eld.map((row, i) => {
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
          </TabPanel>
          {/*Tne table list for SYO stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Store</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {syo
                  ? syo.map((row, i) => {
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
          </TabPanel>
          {/*Tne table list for NRK stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Store</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {nrk
                  ? nrk.map((row, i) => {
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
          </TabPanel>
          {/*Tne table list for THK stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Store</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {thk
                  ? thk.map((row, i) => {
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
          </TabPanel>
          {//Tne table list for DIA stores*}
          <TabPanel>
            <Table className="">
              <TableHead>
                <TableRow>
                  <TableHeaderCell>City</TableHeaderCell>
                  <TableHeaderCell>Store</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dia
                  ? dia.map((row, i) => {
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
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
*/

import { Badge, Metric } from '@tremor/react'
import React from 'react'

export default function Stores() {
  return (
    <div className='grid h-screen place-items-center'>
      <Badge color={'red'} icon={InformationCircleIcon}>This Page is depriciated for a Q-Commerce store</Badge>
    </div>
  )
}
