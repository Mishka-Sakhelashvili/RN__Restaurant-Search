import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    authorization:
      "Bearer jaHfp7ba10ZDjY3quQ4cFEyb_mL-doG6hB0MJum4O_SYJQftr3_-1DymthdgAKVYPVqyfbxT40_Vhf_STWDzMTqfS_Z2wXEs5KkROlmX_orS9P4e7X6P1aIamqMdYHYx",
  },
});
