import CircleList from "@/component/Home/CircleList";
import {
  Alert,
  Button,
  Center,
  List,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import useSWR from "swr";
import { ParipicoCircle } from "../src/models";
import { useRouter } from "next/router";

const Home = () => {
  const { data } = useSWR<ParipicoCircle[]>("paripico_circle_data");
  const { push } = useRouter();
  return (
    <Center p="lg">
      <Stack spacing={"xl"}>
        <Stack>
          <Title>Paripico Event Map</Title>
          <Alert>Paripico Interactive Event Map</Alert>
          <Title order={2}>Circle Booth</Title>
        </Stack>
        <SimpleGrid
          breakpoints={[
            {
              minWidth: "xs",
              cols: 1,
            },
            {
              minWidth: "md",
              cols: 2,
            },
            {
              minWidth: "lg",
              cols: 3,
            },
            {
              minWidth: "xl",
              cols: 4,
            },
          ]}
        >
          {data?.map((data) => {
            return (
              <CircleList
                key={data.id}
                child={data.child}
                section={data.section}
              />
            );
          })}
        </SimpleGrid>
        <Button
          onClick={() => {
            push("/paripico-map");
          }}
        >
          Go To Circle Area Full Map
        </Button>
      </Stack>
    </Center>
  );
};

export async function getStaticProps() {
  const { withSSRContext, Predicates, SortDirection } = await import(
    "aws-amplify"
  );
  const { serializeModel } = await import("@aws-amplify/datastore/ssr");
  const { ParipicoCircle } = await import("../src/models");
  const SSR = withSSRContext();
  const data = await SSR.DataStore.query(ParipicoCircle, Predicates.ALL, {
    sort: (s) => s.weight(SortDirection.ASCENDING),
  });
  return {
    props: {
      fallback: {
        paripico_circle_data: serializeModel(data),
      },
    }, // will be passed to the page component as props
  };
}

export default Home;
