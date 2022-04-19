import { motion } from "framer-motion";
import '../styles/MenuLunch.module.css'
import imgLunchMenu from "../public/images/undraw_Hamburger.svg";
import { css, jsx } from "@emotion/react";




const MenuLunch = ({ lunch, items }) => {
  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  function unMount() {
    window.onload = function () {
      document.querySelector('.cont_modal').className = "cont_modal";
    }
    
    
    var c = 0;
  }
  
  function open_close() {
    if (c % 2 == 0) {
      document.querySelector('.cont_modal').className = "cont_modal cont_modal_active";
      c++;
    } else {
      document.querySelector('.cont_modal').className = "cont_modal";
      c++;
    }
  }

  return (
    <>
      {lunch &&
        items
          .filter((item) => item.category === "lunch")
          .map((item, i) => (
            <motion.div
              className="menu-items"
              key={item.id}
              variants={itemContainer}
              transition={{ delay: i * 0.2 }}
            >
              <div className="cont_principal">
                <div className="cont_central">
                  <div className="cont_modal cont_modal_active">
                    <div className="cont_photo">
                      <div className="cont_img_back">
                        <img src="https://lh3.googleusercontent.com/-XZS2lO613lzdKkcj_49G80CKrVCPzyGhpZm9WUZ3fxNjZlXlmVsebWxABCq5hBOowU3YKNK_rvBNe9xWrNmcn0WATUkVIzssWTYxlyX-Sy_Kx0Uv80NPDdzYqEw59PbE7TaMfFj8WTzISizxDel-LsfVlcjbqUv48ZOpCJDXW8VDKgqItyULEAfQe602cWwo-MDfunKPm3cbLlMC9-IL0CVVpPuXbH6VgXPURbLmCF9d4NMVq6tmHEwGT6SzbIK_Yk80F6GA9R6yEBwKvdWuTpbS62XErf7HkCoxl4q1riRJYxwmfiMqcVvdSzFc40NS4F8mqEU_V_C6IVo9A6N2bKMoMwZR7GLZRj18jPGUuQB-hOTz-9lauT9Y_CI4oe3rgFd_ONQeLD0n8iOwFFdNmo2Dlv-ONGi3StFp1ORctcoHX_UFlMjjbaP162zTrvMEifRgFbVuidriuUaj6tp-y_zDqRjVsEyiX7_iREqs6WktZlzbi3GKukU2GHf4QaqgDEOGvVRmXxgZyrC4ve3Zvg8NwQhuDDE3u_CZ-uiJmTakRBM7MQeEbBnHD-GLI6TggZnN7izqb2BRr5vgb1QjWWPZ2iidOcU5LtamFITMmvD8bNGUR2OGCqop9v5ULJfky7FydhPqz89BKREQ1TOq9CUZvWtuZIskD-3M_fDNH6-_l259LVHZ7QIO2NAWw=w445-h667-no?authuser=0" alt="" />
                      </div>
                      <div className="cont_mins">
                        <div className="sub_mins">
                          <h3>50</h3>
                          <span>MINS</span>
                        </div>
                      </div>
                      <div className="cont_servings">
                        <h3>4</h3>
                        <span>SERVINGS</span>
                      </div>
                      <div className="cont_detalles">
                        <h3>Shakshuka Baked Egg Dish</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nihil tempore
                          ametvoluptatibus rerum, aperiam inventore.</p>
                      </div>
                    </div>
                    <div className="cont_text_ingredients">
                      <div className="cont_over_hidden">
                        <div className="cont_tabs">
                          <ul>
                            <li>
                              <a href="#">
                                <h4>INGREDIENTS</h4>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <h4>PREPARATION</h4>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="cont_text_det_preparation">
                          <div className="cont_title_preparation">
                            <p>STEPS</p>
                          </div>
                          <div className="cont_info_preparation">
                            <p>Heat oven to 375 degress</p>
                            <p>Heat oil in a large skillet over medium-low head. Add onion and bell papper. Cook
                              gently until very soft, about 20 minutes. Add garlic and cook until tender, 1 to 2
                              minutes; stir in cumin, paprika and cook 1 minute. Pour in tomatoes and season with
                              3/4 teaspoon salt and 1/4 teaspoon pepper;</p>
                          </div>
                          <div className="cont_text_det_preparation">
                            <div className="cont_title_preparation">
                              <p>YOU CAN GET HELP FROM THIS VIDEO</p>
                            </div>
                            <div className="cont_info_preparation">
                              <iframe width={560} height={315} src="https://www.youtube.com/embed/Dc7c6xCL8Kw" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            </div>
                          </div>
                        </div>
                        <div className="cont_btn_mas_dets">
                          <a href="#"><i className="fas fa-angle-down" /></a>
                        </div>
                      </div>
                      {/* Open and Close Button  */}
                      <div className="cont_btn_open_dets">
                        <a href="#e" onclick="open_close()">
                          <i className="fas fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
              {/* <img src={imgLunchMenu} alt="food burger" />
              <motion.div className="item-content">
                <motion.div className="item-title-box">
                  <motion.h5 className="item-title">{item.title}</motion.h5>
                  <motion.h5 className="item-price">${item.price}</motion.h5>
                </motion.div>
                <motion.p className="item-desc">{item.desc}</motion.p>
              </motion.div> */}
            </motion.div>
          ))}
    </>
  );
};

export default MenuLunch;
