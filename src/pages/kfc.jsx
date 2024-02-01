import React, { useState, useEffect } from "react";
("use client");
import {
  AreaChart,
  Badge,
  BadgeDelta,
  Card,
  DatePicker,
  Flex,
  Grid,
  Metric,
  ProgressBar,
  Select,
  SelectItem,
  Subtitle,
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
  Text,
  Title,
} from "@tremor/react";
import { StatusOfflineIcon, StatusOnlineIcon } from "@heroicons/react/outline";
//current date/time
let time = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric" });
let date = new Date();

export default function Kfc() {
  const [kfcData, setKfcData] = useState([{}])
  const [timeData, setTimeData] = useState([{}])
  const [dateData, setDateData] = useState([{}])

  async function fetchProducts() {
    const kfcDataResponse = await fetch("https://xavi-o.github.io/glovoappinsights/kfctimeline.json");

    const data = await kfcDataResponse.json();

    //Filter products fetched (Time Filter)
    const pickedDate = document.getElementById('datePicker').textContent
    const specDate = data.filter(row => row.date === pickedDate)
    setDateData(specDate)
    const pickedTime = document.getElementById('timePicker').textContent
    const specTime = dateData.filter(row => row.time === pickedTime)
    setTimeData(specTime)
    setKfcData(timeData);
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const availableNbo = kfcData.filter(row => row.status === 'Available' && row.city === 'NBO').length
  const notAvailableNbo = kfcData.filter(row => row.status === 'Not Available' && row.city === 'NBO').length

  const availableMbs = kfcData.filter(row => row.status === 'Available' && row.city === 'MBS').length
  const notAvailableMbs = kfcData.filter(row => row.status === 'Not Available' && row.city === 'MBS').length

  const availableNrk = kfcData.filter(row => row.status === 'Available' && row.city === 'NRK').length
  const notAvailableNrk = kfcData.filter(row => row.status === 'Not Available' && row.city === 'NRK').length

  const availableNak = kfcData.filter(row => row.status === 'Available' && row.city === 'NAK').length
  const notAvailableNak = kfcData.filter(row => row.status === 'Not Available' && row.city === 'NAK').length

  const availableEld = kfcData.filter(row => row.status === 'Available' && row.city === 'ELD').length
  const notAvailableEld = kfcData.filter(row => row.status === 'Not Available' && row.city === 'ELD').length

  const availableKsm = kfcData.filter(row => row.status === 'Available' && row.city === 'KSM').length
  const notAvailableKsm = kfcData.filter(row => row.status === 'Not Available' && row.city === 'KSM').length

  const availableThk = kfcData.filter(row => row.status === 'Available' && row.city === 'THK').length
  const notAvailableThk = kfcData.filter(row => row.status === 'Not Available' && row.city === 'THK').length

  const available = kfcData.filter(row => row.status === 'Available').length
  const notAvailable = kfcData.filter(row => row.status === 'Not Available').length

  const kfcChartData = [
    {
      city: "NBO",
      Available: ((availableNbo / (availableNbo + notAvailableNbo)) * 100).toFixed(0),
      'Not Available': ((notAvailableNbo / (availableNbo + notAvailableNbo)) * 100).toFixed(0),
    },
    {
      city: "MBS",
      Available: ((availableMbs / (availableMbs + notAvailableMbs)) * 100).toFixed(0),
      'Not Available': ((notAvailableMbs / (availableMbs + notAvailableMbs)) * 100).toFixed(0),
    },
    {
      city: "NRK",
      Available: ((availableNrk / (availableNrk + notAvailableNrk)) * 100).toFixed(0),
      'Not Available': ((notAvailableNrk / (availableNrk + notAvailableNrk)) * 100).toFixed(0),
    },
    {
      city: "NAK",
      Available: ((availableNak / (availableNak + notAvailableNak)) * 100).toFixed(0),
      'Not Available': ((notAvailableNak / (availableNak + notAvailableNak)) * 100).toFixed(0),
    },
    {
      city: "ELD",
      Available: ((availableEld / (availableEld + notAvailableEld)) * 100).toFixed(0),
      'Not Available': ((notAvailableEld / (availableEld + notAvailableEld)) * 100).toFixed(0),
    },
    {
      city: "KSM",
      Available: ((availableKsm / (availableKsm + notAvailableKsm)) * 100).toFixed(0),
      'Not Available': ((notAvailableKsm / (availableKsm + notAvailableKsm)) * 100).toFixed(0),
    },
    {
      city: "THK",
      Available: ((availableThk / (availableThk + notAvailableThk)) * 100).toFixed(0),
      'Not Available': ((notAvailableThk / (availableThk + notAvailableThk)) * 100).toFixed(0),
    },
  ]

  return (
    <main>
      <TabGroup>
        <Title>Status of KFC products</Title>
        <Flex className="">
          <TabList variant="solid">
            <Tab>Dashboard</Tab>
            <Tab>Overview</Tab>
          </TabList>
          <div className="flex">
            <Badge color={'black'}>Date: </Badge>
            <DatePicker
              id="datePicker"
              className="w-fit"
              defaultValue={date}
              enableClear={false}
              displayFormat="M/d/yyyy"
              minDate={new Date('1/24/2024')}
              maxDate={date}
              onSelect={fetchProducts()}
            />
          </div>
          <div className="flex">
            <Badge color={'black'}>Time: </Badge>
            <Select enableClear={false} id="timePicker" defaultValue="0900" className="w-fit mr-6">
              <SelectItem onSelect={fetchProducts()} value="0900">0900</SelectItem>
              <SelectItem value="1300">1300</SelectItem>
              <SelectItem value="1500">1500</SelectItem>
              <SelectItem value="1800">1800</SelectItem>
            </Select>
          </div>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Grid numItemsMd={2} numItemsLg={2} className="gap-6 my-4">
              <Card className="max-w-lg mx-auto">
                <Flex alignItems="start">
                  <div>
                    <Text>Available</Text>
                    <Metric>{available}</Metric>
                  </div>
                  <BadgeDelta deltaType="increase">
                    {((available / (available + notAvailable)) * 100).toFixed(0)}% Uptime
                  </BadgeDelta>
                </Flex>
                <Flex className="mt-4">
                  <Text>
                    {((available / (available + notAvailable)) * 100).toFixed(0)}%
                  </Text>
                  <Text>Total Available Products</Text>
                </Flex>
                <ProgressBar
                  value={((available / (available + notAvailable)) * 100).toFixed(0)}
                  className="mt-2"
                />
              </Card>
              <Card className="max-w-lg mx-auto">
                <Flex alignItems="start">
                  <div>
                    <Text>Not Available</Text>
                    <Metric>{notAvailable}</Metric>
                  </div>
                  <BadgeDelta deltaType="decrease">
                    {((notAvailable / (available + notAvailable)) * 100).toFixed(0)}% Downtime
                  </BadgeDelta>
                </Flex>
                <Flex className="mt-4">
                  <Text>
                    {((notAvailable / (available + notAvailable)) * 100).toFixed(0)}%
                  </Text>
                  <Text>Products Not Available</Text>
                </Flex>
                <ProgressBar
                  color="red"
                  value={((notAvailable / (available + notAvailable)) * 100).toFixed(0)}
                  className="mt-2"
                />
              </Card>
            </Grid>
            <Card>
              <Subtitle>An Area Chart of KFC Top Products Active Status </Subtitle>
              <AreaChart
                data={kfcChartData}
                index="city"
                categories={['Available', 'Not Available']}
                colors={['emerald', 'red']}
                valueFormatter={num => num + '%'}
              />
            </Card>
          </TabPanel>
          <TabPanel>
            <Card>
              <TabGroup>
                <Flex>
                  <TabList>
                    <Tab>Active</Tab>
                    <Tab>Inactive</Tab>
                  </TabList>
                </Flex>
                <TabPanels>
                  <TabPanel>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell>City</TableHeaderCell>
                          <TableHeaderCell>Address</TableHeaderCell>
                          <TableHeaderCell>Title</TableHeaderCell>
                          <TableHeaderCell>Price</TableHeaderCell>
                          <TableHeaderCell>Status</TableHeaderCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {kfcData.filter(state => state.status === 'Available') ?
                          kfcData.filter(state => state.status === 'Available').map((row, i) => {
                            return (<TableRow>
                              <TableCell>{row.city}</TableCell>
                              <TableCell>{row.address.substring(0, 19)}</TableCell>
                              <TableCell>{row.title}</TableCell>
                              <TableCell>{row.price}</TableCell>
                              <TableCell><Badge icon={StatusOnlineIcon} color={'emerald'}>{row.status}</Badge></TableCell>
                            </TableRow>);
                          }) : 'Loading...'}
                      </TableBody>
                    </Table>
                  </TabPanel>
                  <TabPanel>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell>City</TableHeaderCell>
                          <TableHeaderCell>Address</TableHeaderCell>
                          <TableHeaderCell>Title</TableHeaderCell>
                          <TableHeaderCell>Price</TableHeaderCell>
                          <TableHeaderCell>Status</TableHeaderCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {kfcData.filter(state => state.status === 'Not Available') ?
                          kfcData.filter(state => state.status === 'Not Available').map((row, i) => {
                            return (<TableRow>
                              <TableCell>{row.city}</TableCell>
                              <TableCell>{row.address.substring(0, 19)}</TableCell>
                              <TableCell>{row.title}</TableCell>
                              <TableCell>{row.price}</TableCell>
                              <TableCell><Badge icon={StatusOfflineIcon} color="red">{row.status}</Badge></TableCell>
                            </TableRow>);
                          }) : 'Loading...'}
                      </TableBody>
                    </Table>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </Card>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
