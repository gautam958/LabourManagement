import axios from "axios";
import environment from '../../Environments/environment';

//const roadmapApiUrl = 'http://192.168.128.119/TrafficSystemSpeedMapAPI/api/v1/roadmap';
const LabourBaseApiUrl = environment.LabourBaseApiUrl;
export default {

    // const FetchAppConfiguration = (url = LabourBaseApiUrl) => {
    //     return {
    //         fetchAll: () => axios.get(url + '/GetConfig')
    //     }
    // };

    FetchTask(url = LabourBaseApiUrl) {
        return {
            fetchAll: () => axios.post(url + '/GetTask', {
                Code_Type: "WTTT",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            })
        }
    }

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