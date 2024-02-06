import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem = [];
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          }else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
          setLoading(false);
        } catch (error) {
          setLoading(false)
          setError(true);
        }
      }, 2000);
    }, [ ]);
  
  
    const saveItem = (newItem) => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    };
  
    return {
      item, saveItem,loading,error
    };
    
  }
  // localStorage.removeItem('TODOS_V1')

// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: false},
//   {text: 'Tomar Nota', completed: true},
//   {text: 'Lavar la ropa', completed: false},
//   {text: 'Arreglar la cama', completed: false}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos);

  export { useLocalStorage };