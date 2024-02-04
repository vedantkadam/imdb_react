import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";



const Upcoming = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/discover/${endpoint}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=2024-02-01&release_date.lte=2024-12-01&&primary_release_year=2024&watch_region=IN&with_watch_providers=8%7C9%7C2`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Upcoming</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>

            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />

        </div>
    );

    

};

export default Upcoming;
