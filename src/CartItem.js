import React from "react";

class CartItem extends React.Component {
 constructor () {
     super();
     this.state = {
     price: 999,
     title: 'Phone',
     quantity: 1,
     img: ''

     }
 }



    render () {
        const { price, title, quantity } = this.state;

        return (
            <div className="cart-item">
                <div className="left-block">
                 <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize:25 }}>{title}</div>
                    <div  style={{ color: '#777' }}>Rs.{price}</div>
                    <div  style={{ color: '#777' }}>Qty: {quantity}</div>
                    <div class="cart-item-actions">
                  {/* {Buttons} */}
                    </div>
                    <div class="cart-item-actions">
                        <img class="increase" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/01/07/62/07/1000_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" />
                        <img  class="decrease" className="action-icons"  src="https://as2.ftcdn.net/v2/jpg/02/78/84/57/1000_F_278845758_9xl3srVgd8p4jquxgxugGaHV1e5EOlLO.jpg" />
                        <img  class="delete"  className="action-icons"  src="https://as1.ftcdn.net/v2/jpg/00/65/77/26/1000_F_65772602_cPboY4Oamnswse6bN2r9ky4hXDQEVNix.jpg" />


                    </div>

                </div>
            </div>
        )
    }
}
const styles = {

    image: {
      height: 110,
      width: 110,
      borderRadius:4,
      background: '#ccc'
    }
  }
export default CartItem;
