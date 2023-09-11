const SearchInput = (props:any) =>{
    return (
        <div className="col col-sm-4">
            <input
             className="form-control"
             placeholder="Search by Title"
             value={props.value}
             onChange={(e)=>props.setSearch(e.target.value)}
            ></input>
            
        </div>
    )
}

export default SearchInput;