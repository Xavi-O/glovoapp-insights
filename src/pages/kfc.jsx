import React, { useState, useEffect } from "react";
("use client");
import {
  AreaChart,
  BadgeDelta,
  Card,
  DatePicker,
  Flex,
  Grid,
  Metric,
  ProgressBar,
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
  Tracker,
} from "@tremor/react";
//current date/time
let time = new Date().toLocaleTimeString('en-GB', { hour: "numeric", minute: "numeric" });
let date = new Date();

export default function Kfc() {
  const [kfcData, setKfcData] = useState([{}]);

  async function fetchProducts() {
    const kfcDataResponse = await fetch("https://xavi-o.github.io/glovoappinsights/kfctimeline.json");

    const data = await kfcDataResponse.json();

    //Filter products fetched (Time Filter)
    const pickedDate = document.getElementById('datePicker').textContent
    const specTime = data.filter(row => row.date === pickedDate)
    setKfcData(specTime);

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
        <Flex className="">
          <Title>Status of KFC products </Title>
          <DatePicker
            id="datePicker"
            className="w-1/4 mr-6"
            defaultValue={new Date('1/24/2024')}
            enableClear={false}
            displayFormat="M/dd/yyyy"
            minDate={new Date('1/24/2024')}
            maxDate={date}
            onSelect={fetchProducts()}
          />
        </Flex>
        <TabList variant="solid">
          <Tab>Dashboard</Tab>
          <Tab>Overview</Tab>
        </TabList>
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
                    {((available / (available + notAvailable)) * 100).toFixed(0)}%
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
                    {((notAvailable / (available + notAvailable)) * 100).toFixed(0)}%
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
                <TabList>
                  <Tab>Active</Tab>
                  <Tab>Inctive</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableHeaderCell>City</TableHeaderCell>
                          <TableHeaderCell>Address</TableHeaderCell>
                          <TableHeaderCell>Title</TableHeaderCell>
                          <TableHeaderCell>Price</TableHeaderCell>
                          <TableHeaderCell>Date</TableHeaderCell>
                          <TableHeaderCell>Tracker</TableHeaderCell>
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
                              <TableCell>{row.date}</TableCell>
                              <TableCell>
                                <Tracker
                                  className=""
                                  data={[
                                    {
                                      tooltip: '0900',
                                      color: row.time === '0900' && row.status === 'Available' ? 'emerald' :
                                        row.time === '0900' && row.status === 'Not Available' ? 'red' : 'neutral'
                                    },
                                    {
                                      tooltip: '1300',
                                      color: row.time === '1300' && row.status === 'Available' ? 'emerald' :
                                        row.time === '1300' && row.status === 'Not Available' ? 'red' : 'neutral'
                                    },
                                    {
                                      tooltip: '1500',
                                      color: row.time === '1500' && row.status === 'Available' ? 'emerald' :
                                        row.time === '1500' && row.status === 'Not Available' ? 'red' : 'neutral'
                                    },
                                    {
                                      tooltip: '1800',
                                      color: row.time === '1800' && row.status === 'Available' ? 'emerald' :
                                        row.time === '1800' && row.status === 'Not Available' ? 'red' : 'neutral'
                                    },
                                  ]}
                                />
                              </TableCell>
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
                          <TableHeaderCell>Date</TableHeaderCell>
                          <TableHeaderCell>Tracker</TableHeaderCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {kfcData.filter(state => state.status === 'Not Available') ?
                          kfcData.filter(state => state.status === 'Not Available').map((row, i) => {
                            return (<TableRow>
                              <TableCell>{row.city}</TableCell>
                              <TableCell>{row.address.substring(0,19)}</TableCell>
                              <TableCell>{row.title}</TableCell>
                              <TableCell>{row.price}</TableCell>
                              <TableCell>{row.date}</TableCell>
                              <TableCell>
                                <Tracker
                                  className=""
                                  data={[
                                    {
                                      tooltip: '0900',
                                      color: row.time === '0900' && row.status === 'Available' ? 'emerald' :
                                        row.time === '0900' && row.status === 'Not Available' ? 'red' : 'neutral'
                                    },
                                    {
                                      tooltip: '1300',
                                      color: row.time === '1300' && row.status === 'Available' ? 'emerald' :
                                        row.time === '1300' && row.status === 'Not Available' ? 'red' : 'neutral'
                                    },
                                    {
                                      tooltip: '1500',
                                      color: row.time === '1500' && row.status === 'Available' ? 'emerald' :
                                        row.time === '1500' && row.status === 'Not Available' ? 'red' : 'neutral'
                                    },
                                    {
                                      tooltip: '1800',
                                      color: row.time === '1800' && row.status === 'Available' ? 'emerald' :
                                        row.time === '1800' && row.status === 'Not Available' ? 'red' : 'neutral'
                                    },
                                  ]}
                                />
                              </TableCell>
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
