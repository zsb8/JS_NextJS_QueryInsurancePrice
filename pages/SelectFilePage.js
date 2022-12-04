import styles from "./index.module.scss";
const SelectFilePage = ({ uploadToClient, uploadToServer }) => {
  return (
    <>
      <div className={styles.grid1}>
        <div className={styles.card}>
          <h3>Select One CSV File &rarr;</h3>
          <input type="file" name="myData" onChange={uploadToClient} />
        </div>
        <div className={styles.card}>
          <h3>Upload File to Server&rarr;</h3>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={uploadToServer}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};
export default SelectFilePage;
