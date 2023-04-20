import { Link, useMatch } from 'react-router-dom';
import { useMemo } from 'react';
import { ListItemButton, Stack, useTheme } from '@mui/material';
import { RouteType } from '../../../../routes/types';
import { getSidebarItemStyles } from './SidebarItem.styles';

type Props = {
  item: RouteType;
  isCollapsed: boolean;
};

export const SidebarItem = ({ item, isCollapsed }: Props) => {
  const match = useMatch(item.path || '');
  const isActive = useMemo(() => !!match && !!item.path, [match, item.path]);
  const theme = useTheme();

  if (!item.sidebarProps || !item.path || !item.absolutePath) {
    throw new Error('SidebarItem missing sidebarProps or path');
  }

  return (
    <ListItemButton
      component={Link}
      to={item.absolutePath}
      sx={getSidebarItemStyles(theme, isActive)}
    >
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <div>{item.sidebarProps.icon}</div>
        {!isCollapsed && <div>{item.sidebarProps.displayText}</div>}
      </Stack>
    </ListItemButton>
  );
};
