// import styles of this component
import styles from "./MasonryBox.module.css"
import { PropTypes } from 'prop-types';

// MasonryBox component
const MasonryBox = ({ wallSrc }) => {
  return (
    <div className={styles["my-masonry"]}>
        <img src={wallSrc} className={styles["my-masonry"]} alt="" />
    </div>
  )
}

// validate MasonryBox component
MasonryBox.propTypes = {
  wallSrc: PropTypes.string.isRequired,
  userProf: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userJob: PropTypes.string.isRequired,
}

export default MasonryBox