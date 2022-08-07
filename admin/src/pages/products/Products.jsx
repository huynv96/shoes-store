import React, { useState } from "react";
import Button from "../../components/button/Button";
import "./product.css";
import Cart from "../../components/cart/Cart";
import productList from "../../assets/fakeData/product-list";
import Grid from "../../components/grid/Grid";
import '../../components/pagination/Paginatation.css'
import { Link } from "react-router-dom";
const Products = () => {
  const limit = 8
  const initDataShow = limit && productList ? productList.slice(0, Number(limit)) : productList

    const [dataShow, setDataShow] = useState(initDataShow)
    
    let pages = 1

    let range = []

    if (limit !== undefined) {
        let page = Math.floor(productList.length / Number(limit))
        pages = productList.length % Number(limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = page => {
        const start = Number(limit) * page
        const end = start + Number(limit)

        setDataShow(productList.slice(start, end))

        setCurrPage(page)
        console.log(currPage)
    }
  return (
    <div className="product-page">
      <div className="page-header">
        <h2>Products</h2>
        <Link to= '/products/add'>
          <Button type="main">Create New</Button>
        </Link>
      </div>

      <div className="propduct-page__content">
        <div className="product__filer">
          <Grid fuild={false}>
            <div className="product__search pc-4 tablet-12 mobile-12">
              <input type="text" placeholder="Filter product..." />
              <i className="bx bx-search"></i>
            </div>
            <div className="pc-2 tablet-6 mobile-12 gutter">
              <select className="form__select">
                <option value="">All Category</option>
                <option value="">Electronics</option>
                <option value="">Clothing</option>
                <option value="">Something else</option>
              </select>
            </div>
            <div className="pc-2 tablet-6 mobile-12 gutter">
              <select className="form__select">
                <option value="">Last Added</option>
                <option value="">Cheap first</option>
                <option value="">Most viewed</option>
              </select>
            </div>
          </Grid>
        </div>
        <Grid fuild={false}>
          {dataShow && dataShow.map((item, index) => (
            <Cart
              image={item.image}
              name={item.name}
              price={item.price}
              key={index}
            />
          ))}
        </Grid>
        {
                pages > 1 ? (
                  pages <= 10 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                  ):
                  (
                    <div className="table__pagination">
                      <div className='table__pagination-item' onClick={() => selectPage(currPage-1)}>
                      {/* <i className='bx bx-left-arrow-alt'></i> */}
                      &laquo;
                      </div>
                        {
                            range.slice(currPage,currPage+10).map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                        <div className='table__pagination-item' onClick={() => {
                          if (currPage < range.length) {
                            selectPage(currPage+1)
                          }
                          else {
                            selectPage(currPage)
                          }
                          
                        } }>
                        {/* <i className='bx bx-right-arrow-alt'></i> */}
                        &raquo;
                      </div>
                    </div>
                    
                  )
                ) : null
            }
      </div>
    </div>
  );
};

export default Products;
