import { useEffect, useState, React } from 'react';
import InputForm from './InputForm';

import { useContextApps } from "../../Context/Context"
import { useParams } from 'react-router-dom';
import useModal from '../../components/CustomHook/useModal';

export default function MainEditUser() {
  const { jsonData, setJsonData } = useContextApps()
  const [userDataforId, setUserDataForId] = useState(null);
  const [loading, setLoading] = useState(true);
  const { routeParams } = useParams();
const modal = useModal()

  const idUser = jsonData.map(data => data.id);

  // Create a new user
  const addUser = async (userData) => {
    try {
      const response = 'database'
      const data = await response.json();
      setJsonData([...jsonData, data]);
      console.error('Usuario agregado')
    } catch (error) {
      console.error('Error al agregar el usuario:', error);
    }
  };

  // Update an existing user
  const updateUser = async (userData) => {
    try {
      const response = 'database'
      const updatedUser = await response.json();
      const updatedUsers = jsonData.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      setJsonData(updatedUsers);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      const newItems = jsonData.filter((item) => item.id !== userId);
      setJsonData(newItems);
       
      console.log('Usuario eliminado con exito')
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };


  // const searchIndex = jsonData.find(item => "editar/".concat(item.id) === userId);
//Obtiene el dato del usuario
  useEffect(() => {
    const fetchData = async () => {
      try {
        const searchIndex = jsonData?.find(item => Number(item.id) === Number(routeParams));
        if (searchIndex) {
          setUserDataForId(searchIndex);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [jsonData, setJsonData, routeParams]);

  return (
    <div>
      <InputForm modal={modal} userDataforId={userDataforId} addUser={addUser} idUser={idUser} jsonData={jsonData} loading={loading} deleteUser={deleteUser} updateUser={updateUser} initialData={{ id: '', name: '', dob: '', address: '' }} />
    </div>
  );
}
