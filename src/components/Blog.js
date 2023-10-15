import '../css/bloglist.css';
import { Link } from "react-router-dom";

const Blog = ({blogsList, title}) => {
    return ( 
        <div className="container">
            {blogsList.map((blog) => (
                <div className="blog" key={blog.id}>
                    <Link to={`blog/${blog.id}`} className="blog-title">{blog.title}</Link>
                    <small className="blog-date">{blog.date}</small>
                    <p className="blog-author">{blog.author}</p>
                </div>
        ))}
      </div>
        
     );
}
 
export default Blog;