import Thumbnail from "./Thumbnail"

function Results({results}) {
    return (
        //below code gives support for mobile screen, tablet screen and 4k screens
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3
            3xl:flex flex-wrap justify-center">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />    
            ))}
        </div>
    )
}

export default Results
