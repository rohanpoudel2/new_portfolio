import styles from "./category.module.scss";

const Category = ({ data }) => {
  return (
    <div className={styles.category}>
      <span>
        {data.name}
      </span>
    </div >
  )
}

export default Category