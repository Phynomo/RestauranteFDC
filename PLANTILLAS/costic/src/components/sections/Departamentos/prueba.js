import React, { useState, useEffect } from 'react';
import "datatables.net-bs4/js/dataTables.bootstrap4"
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'depa_Id', headerName: 'ID', flex: 1 },
  { field: 'depa_Nombre', headerName: 'Nombre', flex: 1 },
  { field: 'depa_Codigo', headerName: 'Código', flex: 1, 
  type: 'number', },
   {
     field: 'actions',
     headerName: 'Acciones',
     sortable: false,
     flex: 1,
     type: 'number',
     renderCell: (params) => (
       <div>
         <a href="a" style={{ margin: "5px" }}><i class='fas fa-pencil-alt text-secondary'></i></a>
         <a style={{ margin: "5px" }}><i class='far fa-trash-alt ms-text-danger'></i></a>

       </div>
     ),
   },
];

const DataTable = () => {
  const [searchText, setSearchText] = useState('');
  const [rows, setRows] = useState([]);

  const handleSearch = e => {
    setSearchText(e.target.value);
  };



  useEffect(() => {
    fetch('https://localhost:44383/api/Departamentos/Listado')
      .then(response => response.json())
      .then(data => {
        const rows = data.data.map(item => {
          return {
            id: item.depa_Id,
            depa_Id: item.depa_Id,
            depa_Nombre: item.depa_Nombre,
            depa_Codigo: item.depa_Codigo
          }
        });
        setRows(rows);
      });
  }, []);

  const filterData = () => {
    return rows.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <h5 style={{ marginLeft: "5px" }} >Departamentos</h5>
        <div className="input-group" style={{ width: '250px', marginTop: '5px', marginRight: "5px", marginBottom: "-5px" }}>
          <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend"><i className="flaticon-search" /></span>
          </div>
          <input type="text" className="form-control" id="validationCustomUsername" placeholder="Buscar..." aria-describedby="inputGroupPrepend" value={searchText} onChange={handleSearch} />
        </div>
      </div>
      <DataGrid
        style={{ border: "0px solid black"}}
        rows={filterData()}
        columns={columns}
        getRowId={(row) => row.id}
        initialState={{
          ...filterData.initialState,
          pagination: { paginationModel: { pageSize: 10 } },
          
        }}
      />
    </div>
  );
};

export default DataTable;

////////////////////////////////////////////////
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';

// function createData(name, calories, fat, carbs, protein) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//   };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// // stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// // only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// // with exampleArray.slice().sort(exampleComparator)
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Dessert (100g serving)',
//   },
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: false,
//     label: 'Calories',
//   },
//   {
//     id: 'fat',
//     numeric: true,
//     disablePadding: false,
//     label: 'Fat (g)',
//   },
//   {
//     id: 'carbs',
//     numeric: true,
//     disablePadding: false,
//     label: 'Carbs (g)',
//   },
//   {
//     id: 'protein',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)',
//   },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
//     props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts',
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         }),
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           color="inherit"
//           variant="subtitle1"
//           component="div"
//         >
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography
//           sx={{ flex: '1 1 100%' }}
//           variant="h6"
//           id="tableTitle"
//           component="div"
//         >
//         <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
//          <div className="input-group" style={{ width: '250px', margin: '10px', }}>
//            <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend"><i className="flaticon-search" /></span>
//            </div>
//            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Buscar..." aria-describedby="inputGroupPrepend" />
//          </div>
//        </div>
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.name);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, name) => {
//     const selectedIndex = selected.indexOf(name);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, name);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const isSelected = (name) => selected.indexOf(name) !== -1;

//   // Avoid a layout jump when reaching the last page with empty rows.
//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

//   const visibleRows = React.useMemo(
//     () =>
//       stableSort(rows, getComparator(order, orderBy)).slice(
//         page * rowsPerPage,
//         page * rowsPerPage + rowsPerPage,
//       ),
//     [order, orderBy, page, rowsPerPage],
//   );

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table
//             sx={{ minWidth: 750 }}
//             aria-labelledby="tableTitle"
//             size={dense ? 'small' : 'medium'}
//           >
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {visibleRows.map((row, index) => {
//                 const isItemSelected = isSelected(row.name);
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.name)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.name}
//                     selected={isItemSelected}
//                     sx={{ cursor: 'pointer' }}
//                   >
//                     <TableCell padding="checkbox">
//                       <Checkbox
//                         color="primary"
//                         checked={isItemSelected}
//                         inputProps={{
//                           'aria-labelledby': labelId,
//                         }}
//                       />
//                     </TableCell>
//                     <TableCell
//                       component="th"
//                       id={labelId}
//                       scope="row"
//                       padding="none"
//                     >
//                       {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.calories}</TableCell>
//                     <TableCell align="right">{row.fat}</TableCell>
//                     <TableCell align="right">{row.carbs}</TableCell>
//                     <TableCell align="right">{row.protein}</TableCell>
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         label="Dense padding"
//       />
//     </Box>
//   );
// }
//////////////////////////////////////////////////////////////////
// //import * as React from 'react';
// import React, { useState, useEffect, useMemo } from 'react';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';


// const columns = [
//   { id: 'depa_Id', label: 'ID', minWidth: 170 },
//   { id: 'depa_Nombre', label: 'Departamento', minWidth: 100 },
//   {
//     id: 'depa_Codigo',
//     label: 'Codigo',
//     minWidth: 170,
//     align: 'right',
//   },
// ];

// function createData(depa_Id, depa_Nombre, depa_Codigo) {
//   return { depa_Id, depa_Nombre, depa_Codigo };
// }


// export default function StickyHeadTable() {
//   const [data, setRows] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   useEffect(() => {
//     fetch('https://localhost:44383/api/Departamentos/Listado')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         if (data) {
//           const formattedData = data.data.map(item => {
//             return createData(item.depa_Id, item.depa_Nombre, item.depa_Codigo);
//           });
//           setRows(formattedData);
//         }
//       });
//   }, []);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);


//   };

//   const handleSearch = e => {
//          setSearchText(e.target.value);
//        };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//    const filteredRows = useMemo(() => {
//     return data.filter(item =>
//       Object.values(item).some(value =>
//         String(value).toLowerCase().includes(searchText.toLowerCase())
//       )
//     );
//   }, [data, searchText]);
//   return (
       
//     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//       <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
//          <div className="input-group" style={{ width: '250px', margin: '10px', }}>
//            <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend"><i className="flaticon-search" /></span>
//            </div>
//            <input type="text" className="form-control" id="validationCustomUsername" placeholder="Buscar..." aria-describedby="inputGroupPrepend" value={searchText} onChange={handleSearch} />
//          </div>
//        </div>
//       <TableContainer >
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredRows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === 'number'
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//   rowsPerPageOptions={[10, 25, 100]}
//   component="div"
//   count={filteredRows.length}
//   rowsPerPage={rowsPerPage}
//   page={page}
//   onPageChange={handleChangePage}
//   onRowsPerPageChange={handleChangeRowsPerPage}
//   labelRowsPerPage="Filas por página"
// />
//     </Paper>
//   );
// }
//////////////////////////////////////////////////////////
// import React, { useState, useEffect, useMemo } from 'react';
// import MaterialReactTable from 'material-react-table';

// //nested data is ok, see accessorKeys in ColumnDef below


// const Example = () => {
//   const [data, setData] = useState([]);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     fetch('https://localhost:44383/api/Departamentos/Listado')
//       .then(response => response.json())
//       .then(data => setData(data.data));
//   }, []);

//   const handleDelete = (row) => {
//     alert("No se que hacer esta mierda");
//   };

//   const handleSearch = e => {
//     setSearchText(e.target.value);
//   };

//   const filterData = () => {
//     return data.filter(item =>
//       Object.values(item).some(value =>
//         String(value).toLowerCase().includes(searchText.toLowerCase())
//       )
//     );
//   };


//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'depa_Nombre', //access nested data with dot notation
//         header: 'Departamento',
//       },
//       {
//         accessorKey: 'depa_Codigo',
//         header: 'Codigo',
//       },

//       {
//         header: 'Actions',
//         Cell: ({ row }) => (
//           <div>
//           <a onClick={() => handleDelete(row)}><i class='fas fa-pencil-alt text-secondary'></i></a> <a onClick={() => handleDelete(row)} style={{marginLeft: '10px', }}><i class='far fa-trash-alt ms-text-danger'></i></a>
//           </div>
//         ),
//       },
//     ],
//     [],
//   );

//   return (
//     <>
//       {/* <input type="text" value={searchText} onChange={handleSearch} /> */}

//       <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
//         <div className="input-group" style={{ width: '250px', margin: '10px', }}>
//           <div className="input-group-prepend"> <span className="input-group-text" id="inputGroupPrepend"><i className="flaticon-search" /></span>
//           </div>
//           <input type="text" className="form-control" id="validationCustomUsername" placeholder="Buscar..." aria-describedby="inputGroupPrepend" value={searchText} onChange={handleSearch} />
//         </div>
//       </div>
//       <MaterialReactTable
//         title="Table Title"
//   columns={columns}
//   data={filterData()}
//   options={{
//     search: false,
//     filtering: false,
//     sorting: false,
//     paging: false,
//     showTitle: false,
//     headerStyle: { display: 'none' },
//     hideHeader: true,
//   }}
//       />
//     </>
//   );
// };

// export default Example;
////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// const Example = () => {
//   const [rowData, setRowData] = useState([
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxter', price: 72000 }
//   ]);

//   const columnDefs = [
//     { headerName: 'Make', field: 'make', sortable: true, filter: true },
//     { headerName: 'Model', field: 'model', sortable: true, filter: true },
//     { headerName: 'Price', field: 'price', sortable: true, filter: true, valueFormatter: params => `$${params.value.toFixed(2)}` }
//   ];

//   const defaultColDef = {
//     flex: 1,
//     resizable: true,
//     editable: true,
//     filter: true,
//     floatingFilter: true
//   };

//   const frameworkComponents = {
//     customSortRenderer: CustomSortRenderer
//   };

//   const gridOptions = {
//     rowSelection: 'multiple',
//     animateRows: true,
//     suppressDragLeaveHidesColumns: true,
//     rowDrag: true
//   };

//   const onCellValueChanged = params => {
//     console.log(`Cell value changed: row ${params.node.id}, column ${params.colDef.field}, value ${params.newValue}`);
//   };

//   const onGridReady = params => {
//     params.api.sizeColumnsToFit();
//   };

//   return (
//     <div className="ag-theme-alpine" style={{ height: '500px', width: 'auto' }}>
//       <AgGridReact
//         rowData={rowData}
//         columnDefs={columnDefs}
//         defaultColDef={defaultColDef}
//         frameworkComponents={frameworkComponents}
//         gridOptions={gridOptions}
//         onCellValueChanged={onCellValueChanged}
//         onGridReady={onGridReady}
//       />
//     </div>
//   );
// };

// const CustomSortRenderer = props => {
//   const [isAscending, setIsAscending] = useState(false);

//   const handleClick = () => {
//     setIsAscending(!isAscending);
//     props.onClick(isAscending);
//   };

//   return (
//     <div className="ag-custom-sort" onClick={handleClick}>
//       <span>{props.value}</span>
//       {isAscending ? <i className="fas fa-sort-up"></i> : <i className="fas fa-sort-down"></i>}
//     </div>
//   );
// };

// export default Example;