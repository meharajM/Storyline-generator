import {apiPathHelper} from './apiutils'
const healthCheck = () => {
    const path = apiPathHelper('api/healthCheck')
    fetch(path).then((res) => res.text()).then((res)=>{
        console.log(res)
    }).catch(err => console.log(err))
} 
export default healthCheck;