
import ACTION_TYPES from './ActionsTypes';
import LabourRestApi from './LabourRestApi';

// export const FetchAppConfiguration = () => dispatch => {

//     LabourRestApi.FetchAppConfiguration()
//         .then(Response => {
//             dispatch({
//                 type: ACTION_TYPES.FETCH_APPCONFIG,
//                 payload: Response.data
//             })
//         })
//         .catch(err => console.log(`FetchAppConfiguration ${err} `));
// };
export const FetchTask = () => dispatch => {

    LabourRestApi.FetchTask().fetchAll()
        .then(Response => {
            dispatch({
                type: ACTION_TYPES.FETCH_TASK,
                payload: Response.data
            })

        })
        .catch(err => console.log(`FetchTask ${err} `));

};
// export const FetchUserDetails = () => dispatch => {
//     LabourRestApi.FetchUserDetails()
//         .then(Response => {
//             dispatch({
//                 type: ACTION_TYPES.FETCH_USERDETAILS,
//                 payload: Response.data
//             })
//         })
//         .catch(err => console.log(`FetchUserDetails ${err} `));
// };
// export const PostCreateTask = () => dispatch => {
//     LabourRestApi.PostCreateTask()
//         .then(Response => {
//             dispatch({
//                 type: ACTION_TYPES.POST_CREATETASK,
//                 payload: Response.data
//             })
//         })
//         .catch(err => console.log(`FetchUserDetails ${err} `));
// };
