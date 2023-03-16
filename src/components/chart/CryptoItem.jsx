import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCryptoDropName, setCurrentCoin } from '../../store/slices/DropSlice'

const CryptoItem = (props) => {
    const {name}=props
    const dispatch= useDispatch();
    const theme=useSelector((state)=>{
     return state.theme
    })
    const handleClick=(e)=>{
        dispatch(setCurrentCoin(e.target.innerHTML))
        dispatch(setCryptoDropName(e.target.innerHTML))
    }

    return (
			<div
				className={`p-2 ${
					theme === "dark"
						? "hover:bg-dropdownListItemDark"
						: "hover:bg-dropdownListItemLight"
				} cursor-pointer`}
				onClick={handleClick}>
				{name.charAt(0).toUpperCase().concat(name.slice(1))}
			</div>
		);
}

export default CryptoItem