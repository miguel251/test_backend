import { Router } from 'express';
import { getApi } from '../../api/base';
import config from '../../config';

const router = Router();

router.get('/', async (req, res) => {

    try {
        let response = await getApi(`${config.api_url_swap}`, 'swaps');

        if(response.status != 200){
            res.status(204).send('Token Expired Bitsenda');
        }

        res.status(200).send({
            data:{
                swaps:{
                    ...response.data
                }
            }
        })
    } catch (error) {
        if(error.response){
            res.status(500).send(error.response.data);
        }

        console.log(error);
        throw error;
    }
});

export default router;
