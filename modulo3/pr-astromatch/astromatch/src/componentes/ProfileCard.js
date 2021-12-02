import React, { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from './url'

const ProfileCard = (props) => {
  const [currentProfile, setCurrentProfile] = useState({});

  useEffect(() => {
    pegaProfile(props.profile);
  }, [props.profile]);

  const pegaProfile = ({profile.id}) => {
    axios
      .get(`BASE_URL/choose-person/${profile.id}`)
      .then((response) => {
        setCurrentPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>{currentProfile.name}</p>
      <p>{currentProfile.age}</p>
      {currentProfile.types && <p>{currentProfile.types[0].type.name}</p>}
      {currentProfile.sprites && (
        <img
          src={currentProfile.sprites.front_default}
          alt={currentProfile.name}
        />
      )}
    </div>
  );
};

export default ProfileCard;