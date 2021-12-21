const initialState = {
    signature: "",
    verified: false,
    };
    
    const presaleReducer = (state = initialState, action) => {
      switch (action.type) {
        case "VERIFY_SIGNATURE_REQUEST":
          return {
            ...initialState,
          };
        case "VERIFY_SIGNATURE_SUCCESS":
          return {
            ...state,
            signature: action.payload.signature,
            verified: action.payload.verified,
          };
        case "VERIFY_SIGNATURE_FAILED":
          return {
            ...initialState,
          };
        default:
          return state;
      }
    };
    
    export default presaleReducer;