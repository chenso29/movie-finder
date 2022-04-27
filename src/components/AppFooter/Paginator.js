import './Paginator.css';

function Paginator({currentPage, setCurrentPage, lastPage}) {

    function changePage(i) {
        setCurrentPage(currentPage + i)
    }

    return (
        <div className="pageInfoWrapper">
            <button className="paginatorBtn" onClick={() => {
                    if (currentPage > 1){
                        changePage(-1)
                    }else {
                        alert("Beginning of the page")
                    }
                }}>Prev</button>
            <div className="title">page {currentPage} of {lastPage}</div>
            <button className="paginatorBtn" onClick={() => {
                    if(currentPage < lastPage){
                        changePage(1)
                    }else{
                        alert("End of the page")
                    }
                }}>Next</button>
        </div>
    )
}

export default Paginator;