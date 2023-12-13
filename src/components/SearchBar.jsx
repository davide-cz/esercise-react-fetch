export default function( {value ,onchange ,onSearch} ){

    
    
    return(
        <>
            <input type="text" 
            value={value} 
            onChange={(e)=>{onchange(e.target.value)}}/>
            <button onClick={onSearch}>search</button>
        </>
    )
}