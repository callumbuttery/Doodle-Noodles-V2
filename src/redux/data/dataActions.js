import store from "../store";
import { verifyPresale } from '../presale/presaleActions.js';

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      // let name = await store
      //   .getState()
      //   .blockchain.smartContract.methods.name()
      //   .call();

      // dispatch(
      //   fetchDataSuccess({
      //     name,
      //   })
      // );

      dispatch(verifyPresale(account));
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
