// npm modules
import { Link } from "react-router-dom"

// css & assets
import styles from './ArticleCard.module.css'
import articleImgPlaceholder from '../../assets/icons/no-image-icon.png'

const ArticleCard = ({article}) => {
  console.log('Article', article);
  const creator = article.creator ? article.creator[0] : "NO CREATOR FOUND"
  const image_url = article.image_url ? article.image_url : articleImgPlaceholder

  const country = article.country ? article.country[0] : ''

  return (  
    <Link to={`/articles/${article._id}`}>
      <article className={styles.container}>
        <img src={image_url} alt={article.title} />
        <header>
          <h4>⏰ {article.pubDate.slice(0,10)}</h4>
          {country.length ? 
          <h4>{country.toUpperCase()}</h4>
          : ''
          }
          <h4>{creator}</h4>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </header>
      </article>
    </Link>
  )
}

export default ArticleCard