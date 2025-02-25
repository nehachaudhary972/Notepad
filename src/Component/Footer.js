function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer style={styles.footer}>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </>
  );
}
export default Footer;
const styles = {
  footer: {
    textAlign: "center",
  },
};
