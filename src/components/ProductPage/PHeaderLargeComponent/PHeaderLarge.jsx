import './PHeaderLarge.css';
import FlipkartLogo from './PHeaderLargeAssets/FlipkartLogo.png';
import PlusLogo from './PHeaderLargeAssets/Plus.png';
 function PHeaderLarge(){
     return (
        <>
            <div className="p-header-large">
                <div className="p-header-large-main">
                    <div className='p-header-large-left'>
                        <div>
                            <img src={FlipkartLogo} className='flip-logo' alt="flipkart logo image" />
                            <div>
                               <p>Explore <span>Plus</span></p>
                               <img src={PlusLogo} alt="plus logo image" />  
                            </div>
                        </div>
                    </div>
                    <div className='p-header-large-right'>
                        
                    </div>
                </div>
            </div>
        </>
)}

 export default PHeaderLarge;