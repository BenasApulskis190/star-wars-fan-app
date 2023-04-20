import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination
} from '@mui/material';
import usePaginationIds from '../../../hooks/usePagination';
import { useGetCharactersByIdsQuery } from '../../../app/features/api/swapiApi';
import { People } from '../../../app/features/api/types';
import { useColumns } from '../hooks/useColumns';
import { CharacterRow } from './CharacterRow';
import { LoadingRows } from './LoadingRows';

type Props = {
  characterIds: number[];
};

export const FilmTable = ({ characterIds }: Props) => {
  const itemsPerPage = 5;
  const [page, setPage] = useState(0);

  const { idsForCurrentPage } = usePaginationIds(
    characterIds,
    itemsPerPage,
    page
  );

  const { data: characters = [], isFetching } = useGetCharactersByIdsQuery(
    idsForCurrentPage(),
    {
      skip: characterIds.length === 0
    }
  );
  const columns = useColumns();

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>{column.headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isFetching
              ? Array.from({ length: itemsPerPage }).map((_, index) => (
                  <LoadingRows key={index} columns={columns} />
                ))
              : characters.map((character: People) => (
                  <CharacterRow key={character.name} character={character} />
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={characterIds.length + 1}
        rowsPerPage={itemsPerPage}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5]}
      />
    </Paper>
  );
};
