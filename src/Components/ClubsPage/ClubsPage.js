import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClubsTeamInfo } from "./ClubsTeamInfo/ClubsTeamInfo";
import ContactForm from "./ContactForm/ContactForm";
import CustomHR from "../ReusableComponents/CustomHR/CustomHR";
import ClubsHighlights from "./ClubsHighlights/ClubsHighlights";
import ClubsNavbar from "./ClubsNavbar/ClubsNavbar";
import ClubsFooter from "./ClubsFooter/ClubsFooter";
import ClubsFeautured from "./ClubsFeatured/ClubsFeatured";

const ClubsPage = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/front/club/${props.match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
  return (
    <div>
      <ClubsNavbar />
      <ClubsFeautured data={data} clubName={props.match.params.id} />
      {/* <ClubsHighlights data={data}/> */}
      <ClubsTeamInfo data={data} />
      {/* <CustomHR /> */}
      {/* <ContactForm /> */}
      <ClubsFooter />
    </div>
  );
};

export default ClubsPage;
