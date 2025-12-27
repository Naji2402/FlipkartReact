import { React } from 'react';
import PriceOptions from './PriceOptions';

function PriceFilterOptions() {
    return (
        <>
            <div>
                <PriceOptions name="Rs. 500 and Below"/>
                <PriceOptions name="Rs. 501 - Rs. 1000"/>
                <PriceOptions name="Rs. 1001 - Rs. 2500"/>
                <PriceOptions name="Rs. 5001 - Rs. Above"/>
            </div>
        </>
    );
}

export default PriceFilterOptions;