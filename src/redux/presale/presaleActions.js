import axios from 'axios';

const verifyPresaleRequest = () => {
    return {
      type: 'VERIFY_PRESALE_REQUEST',
    };
  };
  
  const presaleVerified = (payload) => {
    return {
      type: 'VERIFY_SIGNATURE_SUCCESS',
      payload: payload,
    };
  };
  
  const presaleNotVerified = (payload) => {
    return {
      type: 'PRESALE_NOT_VERIFIED',
      payload: payload,
    };
  };
  
  export const verifyPresale = (account) => {
    return async (dispatch) => {
      dispatch(verifyPresaleRequest());
      try {

        const response = await axios.post(`/.netlify/functions/validate`, account);

        const verified = response.data.verified;
        const confirmedHash = response.data.confirmedHash;

        console.log('users whitelisted hash: ', confirmedHash);

        if(confirmedHash != 'Not Whitelisted' && verified == true) {
          console.log("Presale verified");
        }
        else {
          console.log("Address not on whitelist");
        }
  
        dispatch(
          presaleVerified({
            confirmedHash,
            verified
          }),
        );
      } catch (err) {
        console.log(err);
        dispatch(presaleNotVerified('Wallet not verified'));
      }
    };
  };