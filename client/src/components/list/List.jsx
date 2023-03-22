import './list.scss';

import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'montant', headerName: 'Montant', width: 200 },
  { field: 'motifs', headerName: 'Motifs', width: 250 },
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
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="editButton">Modifier</div>
            <div className="deleteButton">Supprimer</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="list">
      <h1>LISTE</h1>
      <DataGrid
        className="table"
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
