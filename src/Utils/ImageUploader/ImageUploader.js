import axios from "axios";

const imageUploader = async (img) => {
    let body = new FormData()
    body.set('key', process.env.REACT_APP_IMGBB_API_KEY)
    body.append('image', img)
    const result = await axios({
        method: 'post',
        url: 'https://api.imgbb.com/1/upload',
        data: body
    });

    return result?.data?.data?.url;
};

export default imageUploader;