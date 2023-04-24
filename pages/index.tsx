import CircleList from "@/component/Home/CircleList";
import circle_data from "@/helpers/circle_data";
import { Center, List, SimpleGrid, Stack, Text, Title } from "@mantine/core";

const Home = () => {
  return (
    <Center mt={'lg'}>
      <Stack>
        <Stack>
          <Title>
            Paripico Event Map
          </Title>
          <Title order={2}>
            Circle Booth
          </Title>
        </Stack>
        <SimpleGrid cols={4}>

          {
            circle_data.map(data => {
              return (
                <CircleList child={data.child} section={data.section} />
              )
            })
          }
        </SimpleGrid>
      </Stack>
    </Center>
  )
}

export default Home;