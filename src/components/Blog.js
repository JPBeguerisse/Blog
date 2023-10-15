import '../css/bloglist.css';
const Blog = ({blogsList, title}) => {
    return ( 
        <div className="container">
            {blogsList.map((blog) => (
                <div className="blog" key={blog.id}>
                    <div className="blog-title">{blog.title}</div>
                    <small className="blog-date">{blog.date}</small>
                    <p className="blog-author">{blog.author}</p>
                </div>
        ))}
      </div>
        
     );
}
 
export default Blog;