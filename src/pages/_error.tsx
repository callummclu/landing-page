import {
  Anchor,
  Box,
  Center,
  Group,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { FaBan } from "react-icons/fa6";

export default function Error() {
  const theme = useMantineTheme();
  return (
    <Center h="calc(100vh - 300px)">
      <Box>
        <Group gap="xl">
          <FaBan size={64} color={theme.colors["reqship-pink"][6]} />
          <Box>
            <Title>404</Title>
            <Text>Page not found :(</Text>
            <Anchor c="reqship-blue" href="/">
              go home
            </Anchor>
          </Box>
        </Group>
      </Box>
    </Center>
  );
}
