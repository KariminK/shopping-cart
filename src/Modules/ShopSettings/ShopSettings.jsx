const ShopSettings = ({ onModeChange, mode }) => {
  return (
    <section role="menu" id="filters">
      <button onClick={onModeChange}>{mode + " mode"}</button>
      <button>Filter</button>
    </section>
  );
};
export default ShopSettings;
