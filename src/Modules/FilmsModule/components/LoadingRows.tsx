import { Skeleton, TableCell, TableRow } from '@mui/material';

type Props = {
  columns: {
    field: string;
    headerName: string;
  }[];
};
export const LoadingRows = ({ columns }: Props) => (
  <TableRow>
    {columns.map((column) => (
      <TableCell key={column.field}>
        <Skeleton variant="text" />
      </TableCell>
    ))}
  </TableRow>
);
