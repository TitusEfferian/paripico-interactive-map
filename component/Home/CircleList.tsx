import { CircleTypes } from "@/helpers/circle_data";
import { ActionIcon, Group, List, Stack, Text, Title } from "@mantine/core";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface AppProps extends CircleTypes {}
const CircleList = ({ child, section }: AppProps) => {
  return (
    <Stack>
      <Title order={3}>{section}</Title>
      <List type="ordered">
        {child.map((data) => {
          return <List.Item key={data.circle_id}>
            <Group>
                <Text>
                {data.circle_name}
                </Text>
                <ActionIcon>
                    <IconArrowNarrowRight />
                </ActionIcon>
            </Group>
          </List.Item>;
        })}
      </List>
    </Stack>
  );
};

export default CircleList;
