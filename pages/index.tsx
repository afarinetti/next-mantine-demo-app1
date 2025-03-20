import { Stack } from '@mantine/core';
import { AppHeader } from '@/components/AppHeader/AppHeader';
import { ProductTable } from '@/components/ProductTable/ProductTable';

export default function HomePage() {
  return (
    <Stack gap="xs">
      <AppHeader />
      <ProductTable />
    </Stack>
  );
}
