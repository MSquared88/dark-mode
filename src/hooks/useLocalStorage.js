import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
	
  const prevStoredItem = JSON.parse(localStorage.getItem(key));
  const [storedValue, setStoredValue] = useState(prevStoredItem || initialValue);

	// const [storedValue, setStoredValue] = useState(() => {
	// 	const prevStoredItem = window.localStorage.getItem(key)

	// 	return prevStoredItem ? JSON.parse(prevStoredItem) : initialValue
	// })
	setValue = value => {
		window.localStorage.setItem(key, JSON.stringify(value))
		setStoredValue(value)

	}

 	return[storedValue]
}