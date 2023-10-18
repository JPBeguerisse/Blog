import '../css/bloglist.css';
import { Link } from "react-router-dom";

const Blog = ({blogsList, title}) => {
    const maxContentLength = 2;
    
    return ( 
        <div className="container">
            {blogsList.map((blog) => {
                const shortContent = blog.content.length > maxContentLength 
                ? blog.content.substring(0, maxContentLength) + '...'
                : blog.content;
                
                return (
                    <Link key={blog.id} to={`blog/${blog.id}`} className="blog-title">
                      <div className="blog">
                        {blog.title}
                        <small className="blog-date">{blog.date}</small>
                        <p className="blog-author">{blog.author}</p>
                        <p className="blog-contenu">{shortContent}</p>
                      </div>
                    </Link>
                  );
            })}
      </div>
     );
}
 
export default Blog;