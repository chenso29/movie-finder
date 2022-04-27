import './AppHeader.css';

const AppHeader = ({searchTerm, setSearchTerm, setShow, disabled}) => {
   const handleChange = (e) => {
       setSearchTerm(e.target.value)
   }
    return(
        <div className="appHeader">
            <h1 className='header'>Movie Finder</h1>
            <div>
                <input onChange={handleChange} type="search" name="search" id="search" placeholder="search" value={searchTerm} disabled={disabled}/>
                <button onClick={() => setShow(true)}>Filter</button>  
            </div>
            </div>
    )
}

export default AppHeader;