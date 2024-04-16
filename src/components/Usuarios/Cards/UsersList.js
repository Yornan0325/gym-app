import React, { useState, useMemo } from 'react';
import UserItem from './UserItem';
import SearchBar from '../SearchBar';
import ButtonNewUser from '../ButtonNewUser';

export default function UsersList({ modal, jsonData }) {
  const [filterValue, setFilterValue] = useState('');

  const filteredUsers = useMemo(() => {
    return jsonData.filter(user =>
      [user.title.toLowerCase(), user.surnames.toLowerCase()].some(field =>
        field.includes(filterValue.toLowerCase())
      )
    );
  }, [filterValue, jsonData]);

  const handleSearch = e => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <div class="flex justify-between mx-2">
        <div class="justify-center items-center mr-2">
          <SearchBar filterValue={filterValue} handleSearch={handleSearch} />
        </div>
        <div  >
          <ButtonNewUser modal={modal} />
        </div>

      </div>
      <hr class="my-2 h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-60" />
      <div class="container flex flex-wrap justify-start ">
        {filteredUsers && filteredUsers.length > 0 ? (
          filteredUsers.map((items, index) => (
            <UserItem key={index} data={items} />
          ))
        ) : (
          <p>No se encontraron coincidencias</p>
        )}
      </div>
    </>
  );
};

