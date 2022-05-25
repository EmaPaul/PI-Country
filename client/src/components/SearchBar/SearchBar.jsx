import { useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchCountries } from '../../Actions/index.js';
import './SearchBar.css'

export default function SearchBar() {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    
    function onSubmit(e){
        e.preventDefault();
        if (!search.length){
            return alert('colocar un Pais !!');
        } else{
            dispatch(searchCountries(search))
            setSearch('')
        }
    }

    function onInputChange(e){
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (<div className='formulario'>
        <form  onSubmit={onSubmit}>
            <input className='inCountry' type="text" placeholder='Ingrese un pais...' onChange={onInputChange} value={search} />
            <input className='inBt' type="submit" value="🔍" />
        </form>
    </div>)
}
