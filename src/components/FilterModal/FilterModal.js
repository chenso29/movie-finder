import './FilterModal.css'

function FilterModal({viewedItems, language, mediaType, year, setShow,setMediaType,
    setYear, setLanguage, setViewedItems, setFilterRes}){
    return(
       <div className="modal">
           <div className="modal-content">
               <div className='item-wrapper'>
                    <div className="modal-header">
                        <h3 className="modal-title">Filter</h3>
                    </div>
                    <div className="modal-body">
                        <div className='media-type'>
                            <div>Media type</div>
                            <select name="media-type" id="media-type" defaultValue={mediaType} onChange={e => setMediaType(e.target.value)}>
                                <option className='option' value="">none</option>
                                <option className='option' value="tv">TV</option>
                                <option className='option' value="movie">Movie</option>
                            </select>        
                        </div>
                        <div className='year'>
                            <div>Year</div>
                            <select name="year" id="year" defaultValue={year} onChange={e => setYear(e.target.value)}>
                                <option className='option' value="">none</option>
                                <option className='option' value="197">1970~</option>
                                <option className='option' value="198">1980~</option>
                                <option className='option' value="199">1990~</option>
                                <option className='option' value="200">2000~</option>
                                <option className='option' value="201">2010~</option>
                                <option className='option' value="202">2020~</option>
                            </select>        
                        </div> 
                        <div className='language'>
                            <div>Language</div>
                            <select name="language" id="language" defaultValue={language} onChange={e => setLanguage(e.target.value)}>
                                <option className='option' value="">none</option>
                                <option className='option' value="en">English</option>
                                <option className='option' value="es">Español</option>
                                <option className='option' value="ja">日本語</option>
                                <option className='option' value="fr">français</option>
                                <option className='option' value="ko">한국어</option>
                                <option className='option' value="etc">etc...</option>
                            </select>        
                        </div> 
                        <div className='view-items'>
                            <div>View items</div>
                            <select name="view-items" id="view-items" defaultValue={viewedItems} onChange={e => setViewedItems(e.target.value)}>
                                <option className='option' value="5">5</option>
                                <option className='option' value="10">10</option>
                                <option className='option' value="20">20</option>
                            </select>        
                        </div>   
                    </div>
               </div>
               <div className="modal-footer">
                   <button className="button adapt" onClick={() => {
                       setShow(false)
                    }}>Close</button>
               </div>
           </div>
       </div>
    )
}

export default FilterModal;