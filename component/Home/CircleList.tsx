import { CircleTypes } from "@/helpers/circle_data";
import { List, Stack, Title } from "@mantine/core";

interface AppProps extends CircleTypes {

}
const CircleList = ({ child, section }: AppProps) => {
    return (
        <Stack>
            <Title order={3}>
                {section}
            </Title>
            <List type="ordered">
                {
                    child.map(data => {
                        return (
                            <List.Item key={data.circle_id}>
                                {data.circle_name}
                            </List.Item>
                        )
                    })
                }
            </List>
        </Stack>
    )
}

export default CircleList;