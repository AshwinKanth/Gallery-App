import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateThumbnail, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const thumbnailActive = isActive ? 'thumbnail active' : ''

  const onThumbnailChange = () => {
    updateThumbnail(id)
  }

  return (
    <li className="list-items">
      <button
        className="image-button"
        type="button"
        onClick={onThumbnailChange}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailActive}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
