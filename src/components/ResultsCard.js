
const ResultsCard = ({ article }) => {

    return (
        <div className='article container col-12 m-2 p-3' >
            <div className='row mb-1'>
                <div className='title col-8'> <b>Title:</b> {article.title}</div>
                <div className='author col-4'> <b>Author:</b> {article.author}</div>
            </div>
            <div className='url'> <b>Link:</b> <a href={article.url} target='_blank' rel="noreferrer">{article.url}</a></div>
        </div>
    )
}

export default ResultsCard;