import React, { useState, useEffect } from "react";
("use client");
import {
  AreaChart,
  BadgeDelta,
  BarChart,
  Card,
  Flex,
  Grid,
  Metric,
  ProgressBar,
  ProgressCircle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
} from "@tremor/react";

const valueFormatter = (number) =>
  `${new Intl.NumberFormat("uk").format(number).toString()}`;

  const kfcValueFormatter = (number) =>
  `${new Intl.NumberFormat("uk").format(number).toString()} %`;

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [backendData, setBackendData] = useState([{}]);
  const [kfcData, setKfcData] = useState([{}]);
  const [timeData, setTimeData] = useState("Loading...");

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetch("https://horrible-bird-24.telebit.io/stores"),
      fetch("https://horrible-bird-24.telebit.io/kfc"),
      fetch("https://horrible-bird-24.telebit.io/time"),
    ])
      .then(([resStores, resKfc, resTime]) =>
        Promise.all([resStores.json(), resKfc.json(), resTime.json()])
      )
      .then(([dataStores, kfcStores, dataTime]) => {
        setBackendData(dataStores);
        setKfcData(kfcStores);
        setTimeData(dataTime);
        setIsLoading(false);
      });
  }, []);

  //counting the total number of stores
  const totalStores = backendData.length; //Array consideration
  const openStores = backendData.filter(
    (stores) => stores.storestatus === "Open"
  ).length;
  const closedStores = backendData.filter(
    (stores) => stores.storestatus === "Temporarily closed"
  ).length;
  const tomorrowStores = backendData.filter(
    (stores) => stores.storestatus === "Schedule for Tomorrow"
  ).length;
  const scheduledStores =
    totalStores - (openStores + closedStores + tomorrowStores);

  const storesChartData = [
    {
      name: "Open",
      Stores: openStores,
    },
    {
      name: "Scheduled (Tomorrow)",
      Stores: tomorrowStores,
    },
    {
      name: "Scheduled (Other)",
      Stores: scheduledStores,
    },
    {
      name: "Temporarily Closed",
      Stores: closedStores,
    },
  ];

  //counting the chart data for kfc stores
  const totalKfc = kfcData.length;
  const missingItems = kfcData.filter(product => product.price === "-").length
  const availableItems = totalKfc - missingItems
  const totalNboItems = kfcData.filter(nbo => nbo.city === "NBO").length
  const missingNboItems = kfcData.filter(product => product.price === "-" && product.city === "NBO").length
  const availableNboItems = totalNboItems - missingNboItems
  const totalMbsItems = kfcData.filter(Mbs => Mbs.city === "MBS").length
  const missingMbsItems = kfcData.filter(product => product.price === "-" && product.city === "MBS").length
  const availableMbsItems = totalMbsItems - missingMbsItems
  const totalNrkItems = kfcData.filter((Nrk) => Nrk.city === "NRK").length;
  const missingNrkItems = kfcData.filter((product) => product.price === "-" && product.city === "NRK").length;
  const availableNrkItems = totalNrkItems - missingNrkItems;
  const totalNakItems = kfcData.filter(Nak => Nak.city === "NAK").length
  const missingNakItems = kfcData.filter(product => product.price === "-" && product.city === "NAK").length
  const availableNakItems = totalNakItems - missingNakItems
  const totalEldItems = kfcData.filter(Eld => Eld.city === "ELD").length
  const missingEldItems = kfcData.filter(product => product.price === "-" && product.city === "ELD").length
  const availableEldItems = totalEldItems - missingEldItems
  const totalKsmItems = kfcData.filter(Ksm => Ksm.city === "KSM").length
  const missingKsmItems = kfcData.filter(product => product.price === "-" && product.city === "KSM").length
  const availableKsmItems = totalKsmItems - missingKsmItems
  const totalThkItems = kfcData.filter(Thk => Thk.city === "THK").length
  const missingThkItems = kfcData.filter(product => product.price === "-" && product.city === "THK").length
  const availableThkItems = totalThkItems - missingThkItems

  const kfcChartData = [
    {
      city: "NBO",
      available: ((availableNboItems/totalNboItems)*100).toFixed(0),
      missing: ((missingNboItems/totalNboItems)*100).toFixed(0),
    },

    {
      city: "MBS",
      available: ((availableMbsItems/totalMbsItems)*100).toFixed(0),
      missing: ((missingMbsItems/totalMbsItems)*100).toFixed(0),
    },
    {
      city: "NRK",
      available: ((availableNrkItems / totalNrkItems) * 100).toFixed(0),
      missing: ((missingNrkItems / totalNrkItems) * 100).toFixed(0),
    },
    {
      city: "NAK",
      available: ((availableNakItems/totalNakItems)*100).toFixed(0),
      missing: ((missingNakItems/totalNakItems)*100).toFixed(0),
    },
    {
      city: "ELD",
      available: ((availableEldItems/totalEldItems)*100).toFixed(0),
      missing: ((missingEldItems/totalEldItems)*100).toFixed(0),
    },
    {
      city: "KSM",
      available: ((availableKsmItems/totalKsmItems)*100).toFixed(0),
      missing: ((missingKsmItems/totalKsmItems)*100).toFixed(0),
    },
    {
      city: "THK",
      available: ((availableThkItems/totalThkItems)*100).toFixed(0),
      missing: ((missingThkItems/totalThkItems)*100).toFixed(0),
    },
  ];

  return (
    <main className="p-1">
      <Title>Status of Glovoapp Stores as at {timeData}</Title>
      <TabGroup className="">
        <TabList>
          <Tab>Live Stores</Tab>
          <Tab>KFC</Tab>
        </TabList>
        <TabPanels>
          {/*Tne dashboard for KE stores*/}
          <TabPanel>
            <div className="mt-0">
              <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6 mb-6">
                <Card className="max-w-sm mx-auto">
                  <Flex className="space-x-5" justifyContent="start">
                    <ProgressCircle
                      value={((openStores / totalStores) * 100).toFixed(0)}
                      size="lg"
                    >
                      <BadgeDelta>
                        {((openStores / totalStores) * 100).toFixed(0)}%
                      </BadgeDelta>
                    </ProgressCircle>
                    <div>
                      <Metric>{openStores}</Metric>
                      <Text>
                        {" Open Stores of " + totalStores + " Total Stores"}
                      </Text>
                    </div>
                  </Flex>
                </Card>
                <Card className="max-w-lg mx-auto">
                  <Flex alignItems="start">
                    <div>
                      <Text>Scheduled</Text>
                      <Metric>{tomorrowStores + scheduledStores}</Metric>
                    </div>
                    <BadgeDelta deltaType="unchanged">
                      {(
                        ((tomorrowStores + scheduledStores) / totalStores) *
                        100
                      ).toFixed(0)}
                      %
                    </BadgeDelta>
                  </Flex>
                  <Flex className="mt-4">
                    <Text>
                      {(
                        ((tomorrowStores + scheduledStores) / totalStores) *
                        100
                      ).toFixed(0)}
                      %
                    </Text>
                    <Text>Stores Scheduled to Open Later</Text>
                  </Flex>
                  <ProgressBar
                    color="orange"
                    value={
                      ((tomorrowStores + scheduledStores) / totalStores) * 100
                    }
                    className="mt-2"
                  />
                </Card>
                <Card className="max-w-lg mx-auto">
                  <Flex alignItems="start">
                    <div>
                      <Text>Closed</Text>
                      <Metric>{closedStores}</Metric>
                    </div>
                    <BadgeDelta deltaType="decrease">
                      {((closedStores / totalStores) * 100).toFixed(0)}%
                    </BadgeDelta>
                  </Flex>
                  <Flex className="mt-4">
                    <Text>
                      {((closedStores / totalStores) * 100).toFixed(0)}%
                    </Text>
                    <Text>Stores Temporarily Closed</Text>
                  </Flex>
                  <ProgressBar
                    color="red"
                    value={((closedStores / totalStores) * 100).toFixed(0)}
                    className="mt-2"
                  />
                </Card>
              </Grid>
              <Card>
                <BarChart
                  className="mt-0"
                  data={storesChartData}
                  index="name"
                  categories={["Stores"]}
                  colors={["blue"]}
                  valueFormatter={valueFormatter}
                  yAxisWidth={48}
                />
              </Card>
            </div>
          </TabPanel>
          {/*Tne dashboard for KFC products*/}
          <TabPanel>
            <div className="mt-0">
              <Grid numItemsMd={2} numItemsLg={2} className="gap-6 mt-6 mb-6">
                <Card className="max-w-lg mx-auto">
                  <Flex alignItems="start">
                    <div>
                      <Text>Available</Text>
                      <Metric>{availableItems}</Metric>
                    </div>
                    <BadgeDelta deltaType="increase">
                      {(
                        (availableItems / totalKfc) *
                        100
                      ).toFixed(0)}
                      %
                    </BadgeDelta>
                  </Flex>
                  <Flex className="mt-4">
                    <Text>
                      {(
                        (availableItems / totalKfc) *
                        100
                      ).toFixed(0)}
                      %
                    </Text>
                    <Text>Total Available Products</Text>
                  </Flex>
                  <ProgressBar
                    value={
                      (availableItems / totalKfc) * 100
                    }
                    className="mt-2"
                  />
                </Card>
                <Card className="max-w-lg mx-auto">
                  <Flex alignItems="start">
                    <div>
                      <Text>Not Available</Text>
                      <Metric>{missingItems}</Metric>
                    </div>
                    <BadgeDelta deltaType="decrease">
                      {((missingItems / totalKfc) * 100).toFixed(0)}%
                    </BadgeDelta>
                  </Flex>
                  <Flex className="mt-4">
                    <Text>
                      {((missingItems / totalKfc) * 100).toFixed(0)}%
                    </Text>
                    <Text>Products Not Available</Text>
                  </Flex>
                  <ProgressBar
                    color="red"
                    value={((missingItems / totalKfc) * 100).toFixed(0)}
                    className="mt-2"
                  />
                </Card>
              </Grid>
              <Card>
                <AreaChart
                  className="mt-0"
                  data={kfcChartData}
                  index="city"
                  categories={["available", "missing"]}
                  colors={["teal", "red"]}
                  valueFormatter={kfcValueFormatter}
                  yAxisWidth={48}
                />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
