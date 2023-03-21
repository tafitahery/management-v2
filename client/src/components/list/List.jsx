import './list.scss';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'type', headerName: 'Type', width: 100 },
  { field: 'montant', headerName: 'Montant', width: 150 },
  { field: 'motifs', headerName: 'Motifs', width: 150 },
];

const rows = [
  {
    id: 1,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 2,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 3,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 4,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 5,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 6,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 7,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 8,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 0,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
  {
    id: 10,
    date: '21 mars 2023',
    type: 'Entrée',
    montant: '3500 Ar',
    motifs: 'Vente',
  },
];

export default function List() {
  return (
    <div className="list">
      <h1>LISTE</h1>
      <DataGrid
        className="table"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
