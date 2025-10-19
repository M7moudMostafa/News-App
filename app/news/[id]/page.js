const NewsDetailPage = ({ params }) => {
    const newsId = params.id;
    return (
        <>
            <div>News Details Page</div>
            <p>News ID: {newsId}</p>
        </>
    )
}

export default NewsDetailPage