import './cssmodule/Product.css'

function Header(props) {
    return (
        <div className='flex shopping-card'>
            
            <div onClick={() => props.handleShow(false)} >Shop More</div>
            
            <div onClick={() => props.handleShow(true)}>My Cart
                <sup> {props.count} </sup>
            </div>
        </div>
        
        
        
    );
}
export default Header;

