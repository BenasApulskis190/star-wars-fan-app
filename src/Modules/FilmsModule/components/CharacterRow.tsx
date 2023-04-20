import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { People } from '../../../app/features/api/types';

interface CharacterRowProps {
  character: People;
}

export const CharacterRow: React.FC<CharacterRowProps> = ({ character }) => (
  <TableRow key={character.name}>
    <TableCell>{character.name}</TableCell>
    <TableCell>{character.birth_year}</TableCell>
    <TableCell>{character.gender}</TableCell>
    <TableCell>{character.mass}</TableCell>
  </TableRow>
);
