import React from "react";
import styles from "../views/CatsView.module.css";
import { useCatsContext } from "./CatsViewer";

const Viewer = () => {
  const { data, isLoading, refetch, handleFavorites, enabledFavorites } =
    useCatsContext();

  return (
    <div className={styles.viewer}>
      {isLoading ? (
        <div className={styles.loading}></div>
      ) : (
        <img alt="cat" src={data[0].url} />
      )}

      <div className={styles.btnGroup}>
        {enabledFavorites && (
          <button onClick={() => handleFavorites(data[0].url)}>❤️</button>
        )}
        <button onClick={refetch}>🔜</button>
      </div>
    </div>
  );
};

export default Viewer;
