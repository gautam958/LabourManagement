import axios from "axios";
import environment from '../../Environments/environment';

//const roadmapApiUrl = 'http://192.168.128.119/TrafficSystemSpeedMapAPI/api/v1/roadmap';
const LabourBaseApiUrl = environment.REACT_APP_ApiUrl;
const ConfigURL = environment.REACT_APP_ConfigURL;
export default {

    FetchAppConfiguration(_url = ConfigURL) {
        return {
            fetchConfig: () => axios.get(_url, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            })
        }
    },

    FetchTask(_url = LabourBaseApiUrl) {
        return {
            fetchAll: () => axios.post(_url + '/GetTask', {
                Code_Type: "WTTT",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            })
        }
    },

    // const FetchUserDetails = (url = LabourBaseApiUrl) => {
    //     return {
    //         fetchAll: () => axios.get(url + '/GetUser')
    //     }
    // };

    // const PostCreateTask = (url = LabourBaseApiUrl, data) => {
    //     return {
    //         fetchAll: () => axios.post(url + '/CreateTask', data)
    //     }
    // };

}

//export default LabourRestApi;