import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Card, Text, Title } from "@mantine/core";

export default function Demos() {
  const Breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumbs />
      <Card withBorder>
        <Title>Demos</Title>
        <Text>
          Page is incomplete, this page will be coming soon with more
          information on the product.
        </Text>
      </Card>
    </>
  );
}
