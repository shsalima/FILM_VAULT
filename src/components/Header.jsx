import "../styles/header.css";
import Filter from "./FilterFiml";
import NavBar from "./NavBar";
export default function Header({ onOpenModal, onSelect, movies ,filterCriteria, setFilterCriteria }) {
  return (
    <div className="header-div">
      <header className="header">
        <NavBar onOpenModal={onOpenModal} />
        <Filter  filterCriteria={filterCriteria} setFilterCriteria={setFilterCriteria}/>
      </header>
    </div>
  );
}
