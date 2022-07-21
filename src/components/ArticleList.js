import Article from './Article'
let c = 0

const ArticleList = ( {posts} ) => {
    

    return (
        <main>
            {posts.map((post) => {
                return <Article key={c++} title={post.title} date={post.date} preview={post.preview}/>
            })}
        </main>
    )
}

export default ArticleList