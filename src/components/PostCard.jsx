import { Link } from "react-router-dom"
import {appwriteService} from "../appwrite/config"


const PostCard = ({$id, title, featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div>
            <div className="img_div">
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} />
            </div>
            <h2>{title}</h2>
        </div>
    
    </Link>
  )
}

export default PostCard