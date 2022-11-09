import styles from "./burgerIngredient.module.css";

const burgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1}></div>
          <div className={styles.Seeds2}></div>
        </div>
      );
      break;
    case "meat":
      <div className={styles.Meat}></div>;
      break;
    case "chese":
      <div className={styles.Cheese}></div>;
      break;
    case "salad":
      <div className={styles.Salad}></div>;
      break;
    case "bacon":
      <div className={styles.Bacon}></div>;
      break;

    default:
      ingredient = null;
  }

  return ingredient;
};

export default burgerIngredient;
