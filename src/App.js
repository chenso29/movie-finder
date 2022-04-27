import './App.css'
import AppHeader from './components/AppHeader/AppHeader'
import MovieList from './components/AppBody/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import data1 from './data/data1.json'
import data2 from './data/data2.json'
import data3 from './data/data3.json'
import data4 from './data/data4.json'
import data5 from './data/data5.json'
import FilterModal from './components/FilterModal/FilterModal';
import Paginator from './components/AppFooter/Paginator';



function App(){
    const [posts] = useState([
        ...data1.results,
        ...data2.results,
        ...data3.results,
        ...data4.results,
        ...data5.results
    ]);
    const [show, setShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(10)
    const [isActive, setIsActive] = useState(false)
    const [viewedItems, setViewedItems] = useState(10);
    const [mediaType, setMediaType] = useState('')
    const [year, setYear] = useState('')
    const [language, setLanguage] = useState('')
    const indexOfLastPost = currentPage * viewedItems;
    const indexOfFirstPost = indexOfLastPost - viewedItems;
    const [filteredPosts, setFilteredPosts] = useState([])

    useEffect(() => {
        const filtered = () => {
            return posts.filter(post => (mediaType!=='') ? post.media_type === mediaType : post)
                .filter(post => (year!=='')
                    ? post.first_air_date ? post.first_air_date.includes(year) : post.release_date.includes(year)
                    : post)
            .filter(post => (language!=='') ? post.original_language === language : post)
        }
        setFilteredPosts(filtered())
    }, [mediaType, year, language, posts])
    

    useEffect(() => {
        let results = () => {
            if(typeof(filteredPosts) !== 'undefined' && filteredPosts !== []){
                return results = !searchTerm 
                    ? filteredPosts
                    : filteredPosts.filter(post => post.title 
                        ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                        : post.name.toLowerCase().includes(searchTerm.toLowerCase()));
            } else {
                return results = !searchTerm 
                    ? posts
                    : posts.filter(post => post.title 
                        ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                        : post.name.toLowerCase().includes(searchTerm.toLowerCase()));
            }
            }
        results();
        setLastPage((results.length%viewedItems)>0 ? (Math.trunc(results.length/viewedItems)+1) : Math.trunc(results.length/viewedItems));
        setSearchResult(results.slice(indexOfFirstPost, indexOfLastPost));
    }, [searchTerm, posts, indexOfFirstPost, indexOfLastPost, filteredPosts, viewedItems, lastPage])
   
    useEffect(() => {
        setCurrentPage(1)
    },[searchTerm, isActive])

    useEffect(() => {
        setIsActive((e) => !e)
    }, [show])

    return (
        <div className='App'>
            <div className={isActive ? 'appBlur' : ''} >
                {/*--------------------------------Header---------------------------------- */}
                <AppHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} setShow={setShow} disabled={isActive ? true : false}/>

                {/*---------------------------------Body----------------------------------- */}
                <MovieList searchResult= {searchResult}/>
                
                {/*--------------------------------Footer---------------------------------- */}
                <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} lastPage={lastPage} searchResult={searchResult}/>
            </div>

                {/*-------------------------------Modal----------------------------------- */}
            {show && <FilterModal viewedItems={viewedItems} language={language} mediaType={mediaType} year={year} setShow={setShow} setMediaType={setMediaType}
             setYear={setYear} setLanguage={setLanguage} setViewedItems={setViewedItems}/>}
        </div>
    
    )
}

export default App;