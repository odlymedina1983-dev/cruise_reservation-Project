import "../../styles/components/Hero/_SearchEngine.scss";

import CTA from "../CTA/CTA";
import Departure from "./Departure";
import CruiseLine from "./CruiseLine";
import DateInput from "./DateInput";
import Price from "./Price";
import KanowaScore from "./KanowaScore";

function SearchEngine() {
  return (
    <div className="search-engine">
      
      {/* Title */}
      <div className="search-engine__title">
        Find your Cruise
      </div>

      {/* Inputs */}
      <div className="search-engine__inputs">
        <Departure />
        <CruiseLine />
        <DateInput />
        <Price />
        <KanowaScore />
      </div>

      {/* CTA */}
      <div className="search-engine__cta">
        <CTA
          label="Find it"
          size="mobile"
          type="primary"
          icon="none"
        />
      </div>

      {/* Footer text */}
      <p className="search-engine__footer">
        Sail with the world’s top cruise lines.
      </p>

    </div>
  );
}

export default SearchEngine;