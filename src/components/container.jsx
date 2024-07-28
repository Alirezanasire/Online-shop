const Container
 = () => {
    return (
      <>
      <div>  
        <center>  
            <h1>محصولات</h1>  
        </center>  
        <div className="container">  
            {[  
                { img: "https://soft14.storage.iran.liara.space/amz/ax1.jpg", price: "140000", desc: "درباره محصول 1" },  
                { img: "https://soft14.storage.iran.liara.space/amz/ax2.jpg", price: "180000", desc: "درباره محصول 2" },  
                { img: "https://soft14.storage.iran.liara.space/amz/ax3.png", price: "200000", desc: "درباره محصول 3" },  
                { img: "https://soft14.storage.iran.liara.space/amz/ax4.jpg", price: "250000", desc: "درباره محصول 4" }  
            ].map((product, index) => (  
                <div className="product" key={index}>  
                    <img src={product.img} alt={`Product Image ${index + 1}`} />  
                    <h1>{product.price} تومان</h1>  
                    <p>{product.desc}</p>  
                </div>  
            ))}  
        </div>  
    </div>
      </>
    )
  }
  
export default Container