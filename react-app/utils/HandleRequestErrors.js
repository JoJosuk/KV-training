const handleRequestErrors = (showToast, response) => {
  if (response.error) {
    try {
      if (response.error.data.respbody.validationerror) {
        showToast(response.error.data.respbody.validationerror);
      } else if (response.error.data.respbody.message) {
        showToast(response.error.data.respbody.message);
      }
    } catch (e) {
      console.log("error ", e);
      showToast("unknown error");
    }
    return true;
  }
};
export default handleRequestErrors;
