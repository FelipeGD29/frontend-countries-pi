import axios from "axios";
import {
  GET_COUNTRIES,
  GET_DETAIL,
  GET_BY_NAME,
  CREATE_ACTIVITY,
  GET_ACTIVITIES,
  ORDER_ALPHABETICALLY,
  ORDER_POPULATION,
  FILTER_CONTINENT,
  ORDER_DURATION,
} from "./action-types";

export const getCountries = () => {
  return async (dispatch) => {
    const { data } = await axios.get("https://backend-countries-pi.onrender.com/countries");
    dispatch({ type: GET_COUNTRIES, payload: data });
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`https://backend-countries-pi.onrender.com/countries/${id}`);
    dispatch({ type: GET_DETAIL, payload: data });
  };
};

export const getName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://backend-countries-pi.onrender.com/country/name?name=${name}`
      );

      dispatch({ type: GET_BY_NAME, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createActivity = (activityData) => {
  return async (dispatch) => {
    activityData.difficulty = Number(activityData.difficulty);
    activityData.duration = Number(activityData.duration);
    axios
      .post("https://backend-countries-pi.onrender.com/activities", activityData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        dispatch({ type: CREATE_ACTIVITY, payload: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("https://backend-countries-pi.onrender.com/activities");
      dispatch({ type: GET_ACTIVITIES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const orderAlphabetically = (order) => {
  return {
    type: ORDER_ALPHABETICALLY,
    payload: order,
  };
};

export const orderPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const filterContinent = (contient) => {
  return {
    type: FILTER_CONTINENT,
    payload: contient,
  };
};

export const orderDuration = (order) => {
  return {
    type: ORDER_DURATION,
    payload: order,
  }
}

