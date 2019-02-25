
export const DATA_AVAILABLE = 'DATA_AVAILABLE';


import axios from 'axios';

export function getData(){
    return (dispatch) => {

        axios.get('https://s3.amazonaws.com/devops-infra/public/MOCK_DATA.json')
            .then(function (response) {

                dispatch({type: DATA_AVAILABLE, data:response.data});
            })
            .catch(function (error) {
                console.log(error);
    })
}


}