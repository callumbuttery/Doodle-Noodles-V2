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
        console.log("hit presaleactions.jS");
        const response = await axios.post(`/.netlify/functions/validate`, account);
        console.log(response);
        const sig = await response.data.message;
        console.log(sig);
        const signature = sig.signature;
        const verified = (signature !== "");
        if(verified) {
          console.log("Presale verified");
        }
        else {
          console.log("Not on whitelist");
        }
  
        dispatch(
          presaleVerified({
            signature,
            verified
          }),
        );
      } catch (err) {
        console.log(err);
        dispatch(presaleNotVerified('Wallet not verified'));
      }
    };
  };