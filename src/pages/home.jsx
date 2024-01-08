import React from "react";
("use client");
import {
  Bold,
  Callout,
  Card,
  Flex,
  Grid,
  Italic,
  List,
  Metric,
  Subtitle,
  Text,
  Title,
} from "@tremor/react";

export default function Home() {
  return (
    <>
      <div className="mb-20 text-center">
        <Metric className="mb-1">Glovoapp Insights</Metric>
        <img className="w-2/3 mx-auto" src="dashimage.png" alt="dash image" />

        <Title className="text-2xl">Overview</Title>
        <Text className="">
          Welcome to our GlovoApp Insights Hub, a proprietary platform designed
          for account managers and management analysts
        </Text>
        <Flex className="my-10">
          <Card className="m-6 text-2xl">
            <Subtitle>Benefits</Subtitle>
            <List>
              <Text className="leading-10 text-black">
                Gain real-time insights into top-performing products and
                promotions.
              </Text>
              <Text className="leading-10 text-black">
                Monitor store statuses for strategic decision-making.
              </Text>
              <Text className="leading-10 text-black">
                Enhance efficiency with data-driven analytics.
              </Text>
            </List>
          </Card>
          <Card className="m-6 text-2xl">
            <Subtitle>Uniqueness</Subtitle>
            <List>
              <Text className="leading-10 text-black">
                Live Data Feed: Stay ahead with up-to-the-minute information.
              </Text>
              <Text className="leading-10 text-black">
                Intuitive Dashboards: Visualize trends effortlessly.
              </Text>
              <Text className="leading-10 text-black">
                Strategic Decision Support: Empowering your team for success.
              </Text>
            </List>
          </Card>
        </Flex>
        <Title className="text-2xl">Key Features</Title>
        <Subtitle className="mt-5">Top Performing Products Dashboard</Subtitle>
        <Text className="w-2/3 mx-auto leading-6">
          Immerse yourself in the comprehensive Top Performing Products
          Dashboard, a dynamic tool allowing you to track, analyze, and
          strategize based on the real-time performance of your flagship
          products.
        </Text>
        <Subtitle className="mt-5">Promotions Analytics</Subtitle>
        <Text className="w-2/3 mx-auto leading-6">
          Optimize your marketing strategies by delving into Promotions
          Analytics. Understand the impact of promotions on user engagement,
          allowing you to refine your promotional campaigns for maximum
          effectiveness.
        </Text>
        <Subtitle className="mt-5">Store Status Tracker</Subtitle>
        <Text className="w-2/3 mx-auto leading-6">
          Ensure operational excellence with the Store Status Tracker. A quick
          glance reveals the open or closed status of GlovoApp stores,
          empowering you to align strategies with the current operational
          landscape.
        </Text>
        <Title className="text-2xl my-10">Meet The Team</Title>
        <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-0 mb-12">
          <Callout color="pink">
            <Flex>
              <img
                className="w-24 rounded-full"
                src="ivy.jpeg"
                alt="profile 1"
              />
              <Card className="bg-transparent ml-5">
                <Bold>Ivy Maingi</Bold>
                <Text>
                  <Italic>Manager</Italic>
                  <blockquote>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </blockquote>
                </Text>
              </Card>
            </Flex>
          </Callout>

          <Callout color="emerald">
            <Flex>
              <img
                className="w-24 rounded-full"
                src="pato.png"
                alt="profile 2"
              />
              <Card className="bg-transparent ml-5">
                <Bold>Patrick Muhoro</Bold>
                <Text>
                  <Italic>Account Manager</Italic>
                  <blockquote>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </blockquote>
                </Text>
              </Card>
            </Flex>
          </Callout>

          <Callout color="indigo">
            <Flex>
              <img
                className="w-24 rounded-full"
                src="xavier.jpg"
                alt="profile 3"
              />
              <Card className="bg-transparent ml-5">
                <Bold>Xavier Odhiambo</Bold>
                <Text>
                  <Italic>Content</Italic>
                  <blockquote>
                    The intuitive dashboards make complex analytics accessible,
                    turning every user into a data maestro.
                  </blockquote>
                </Text>
              </Card>
            </Flex>
          </Callout>
        </Grid>
      </div>
    </>
  );
}
