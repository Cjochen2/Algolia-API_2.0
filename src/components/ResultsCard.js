
const ResultsCard = ({ article, key }) => {

    return (
        <div className='article' >
            <div className='title'> Title: {article.title}</div>
            <div className='author'> Author: {article.author}</div>
            <div className='url'> Link: <a href={article.url} target='_blank' rel="noreferrer">{article.url}</a></div>

        </div>
    )
}

export default ResultsCard;