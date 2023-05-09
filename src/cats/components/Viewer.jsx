import React from "react";
import styles from "../views/CatsView.module.css";
import { useCatsContext } from "./Cats";

const Viewer = () => {
  const { data, isLoading, refetch, handleFavorites } = useCatsContext();

  return (
    <div className={styles.viewer}>
      {isLoading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <img alt="cat" src={data[0].url} />
      )}

      <div className={styles.btnGroup}>
        <button
          onClick={() => {
            handleFavorites(data[0].url);
          }}
        >
          ❤️
        </button>
        <button onClick={refetch}>🔜</button>
      </div>
    </div>
  );
};

export default Viewer;
