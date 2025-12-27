import CheckBox from '../CheckBox.jsx';

function DiscountFilterOptions() {
    return (
        <>
            <div>
                <CheckBox name="50% or more"/>
                <CheckBox name="70% or more"/>
                <CheckBox name="60% or more"/>
                <CheckBox name="40% or more"/>
                <CheckBox name="30% or more"/>
            </div>
        </>
    );
}

export default DiscountFilterOptions;