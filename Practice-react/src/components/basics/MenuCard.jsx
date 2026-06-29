import React from 'react'

const MenuCard = (menuData) => {
    console.log(menuData);
    
  return (
    <>
    <section className='main-card--cointainer'>
    <div className='card-container'>
    <div className='card'>
        <div className='card-body'>
            <span className='card-number card-circle subtle'>1</span>
            {/* <span className='card-auther subtle 'style={{color:"red"}}>Breakfast</span> */}
            <span className='card-auther subtle '>Breakfast</span>
            <h2 className='card-title'>Maggi</h2>
            <span className='card-description subtle'> maggi Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, amet!</span>
            <div className='card-read'>Read</div>
            <div>
                <img src="{image}" alt="images" className='card-media' />
                <span className='card-tag subtle'>Order Now</span>
            </div>
        </div>
    </div>
    </div>
    </section>
 
    </>
  )
}

export default MenuCard