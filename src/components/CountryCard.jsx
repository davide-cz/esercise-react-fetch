export default function({countryName,flagURL,population,capital}){

    return (
        <figure className='nationFigure'>
            <h3>{countryName}</h3>
            <img src={flagURL} alt={`${countryName}${flagURL}`} />
            <p>Population:{population}</p>
            <p>{capital}</p>
        </figure>
    )
}