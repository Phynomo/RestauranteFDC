import React, { useState } from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

const roles = [
  { value: 'role1', label: 'Departamentos' },
  { value: 'role2', label: 'Cargos' },
  { value: 'role3', label: 'Facturas' },
  { value: 'role4', label: 'Usuarios' },
];

const ScreenRoleDualListbox = () => {
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleRoleChange = (selected) => {
    setSelectedRoles(selected);
    console.log(selectedRoles);
  };

  return (
    <DualListBox
      options={roles}
      selected={selectedRoles}
      onChange={handleRoleChange}
      canFilter
      filterCallback={(option, filterInput) => {
        return option.label.toLowerCase().includes(filterInput.toLowerCase());
      }}
      icons={{ moveLeft: '<', moveAllLeft: '<<', moveRight: '>', moveAllRight: '>>' }}
      lang={{
        availableHeader: 'Roles disponibles',
        selectedHeader: 'Roles seleccionados',
        filterPlaceholder: 'Filtrar',
      }}
    />
  );
};

export default ScreenRoleDualListbox;
