import Java from './MidSection/Java.jsx'
import Python from './MidSection/Python.jsx'
import WD from './MidSection/WD.jsx'
import AI from './MidSection/AI.jsx'
import '../Styles/MidSection.css'
function MidSection(){
    return(
    <div className="MidSection">
        <div className="Container">
        <Java/>
        <Python/>
        <WD/>
        <AI/>
        </div>
    </div>);

}

export default MidSection