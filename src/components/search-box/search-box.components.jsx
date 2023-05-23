import "./search-box.styles.scss";
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search-container m-2.5 flex justify-center items-center">
      <input
        className="search border-none py-[10px] px-[25px] w-[60rem] leading-8 mb-7 rounded-3xl"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchBox;
