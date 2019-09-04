import { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (initialValue) => {
	const [value, setValue] = useLocalStorage("darkModeStatus", initialValue )

	useEffect(() =>{
		const body = document.querySelector('body')
		value ? body.classList.add('dark-mode') : body.classList.remove('dark-mode')
	}, [value])

	return [value, setValue]
}