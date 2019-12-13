import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        //console.log('hi there');
        try{
            const response = await yelp.get('/search', {
                //using params append sany key vaue pairs onto search term => ?limit=50
                params:{
                    limit:50,
                    term:searchTerm,
                    location: 'san jose'
                }
            });
            // response.data.businesses
            setResults(response.data.businesses);
        }catch (err){
            //console.log(err);
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};