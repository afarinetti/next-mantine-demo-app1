import { clsx } from '@nberlette/clsx';
import { LucideMoon, LucideSun } from 'lucide-react';
import { ActionIcon, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Group justify="center">
      <ActionIcon
        onClick={toggleColorScheme}
        variant="default"
        size="lg"
        aria-label="Toggle color scheme"
      >
        <LucideSun className={clsx(classes.icon, classes.light)} />
        <LucideMoon className={clsx(classes.icon, classes.dark)} />
      </ActionIcon>
    </Group>
  );
}
