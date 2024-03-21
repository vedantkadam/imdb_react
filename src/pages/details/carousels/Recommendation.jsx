import React, { useState, useEffect } from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  // State to control whether to display the Carousel
  const [displayCarousel, setDisplayCarousel] = useState(false);

  useEffect(() => {
    // Set a timeout to display the Carousel after 20 seconds
    const timeoutId = setTimeout(() => {
      setDisplayCarousel(true);
    }, 10000); // 20 seconds in milliseconds

    // Cleanup the timeout when the component unmounts or when data changes
    return () => clearTimeout(timeoutId);
  }, [data]);

  return (
    <div>
      {displayCarousel && (
        <Carousel
          title="Similar Users also watched..."
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
        />
      )}
    </div>
  );
};

export default Recommendation;
