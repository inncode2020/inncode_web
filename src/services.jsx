import axios from "axios";

class Service {
  static api() {
    const o = axios.create({
      baseURL: "https://rocky-fjord-13911.herokuapp.com",
      headers: {
        "Content-Type": "application/json",
      },
    });

    o.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error.response && error.response.status === 505) {
          console.log(error);
        }
      }
    );

    return o;
  }

  static Inncode = class {
    static async PostProject(obj) {
      console.log(obj);
      return await Service.api().post(`/postProject`, { ...obj }, null);
    }
    static async ContactSupport(obj) {
      return await Service.api().post(`/contactSupport`, { obj }, null);
    }
  };
}

export default Service;
