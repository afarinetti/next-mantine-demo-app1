import { LucideCalendarClock } from 'lucide-react';
import { Container, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import classes from './AppHeader.module.css';

export function AppHeader() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <LucideCalendarClock size={28} />
        <Title order={2}>App Header</Title>
        <ColorSchemeToggle />
      </Container>
    </header>
  );
}
