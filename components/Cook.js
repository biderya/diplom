import { motion } from "framer-motion";
import imgLunchMenu from "../public/images/undraw_Hamburger.svg";

const Cook= ({ Cook, items }) => {
  const itemContainer = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
              css={css`/* Import Font  */
              @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600&display=swap');
              
              @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');
              /* Basic Reset Css  */
              * {
                  margin: 0px auto;
                  padding: 0px;
                  box-sizing: border-box;
              }
              
              body {
                  font-family: 'Dosis', sans-serif;
              }
              
              .cont_principal {
                  position: absolute;
                  width: 100%;
                  height: 100%;   
                  background: rgb(251, 250, 246);
                  background: -moz-linear-gradient(-45deg, rgba(251, 250, 246, 1) 9%, rgba(212, 206, 191, 1) 74%, rgba(212, 206, 191, 1) 74%, rgba(212, 206, 191, 1) 100%);
                  background: -webkit-linear-gradient(-45deg, rgba(251, 250, 246, 1) 9%, rgba(212, 206, 191, 1) 74%, rgba(212, 206, 191, 1) 74%, rgba(212, 206, 191, 1) 100%);
                  background: linear-gradient(135deg, rgba(251, 250, 246, 1) 9%, rgba(212, 206, 191, 1) 74%, rgba(212, 206, 191, 1) 74%, rgba(212, 206, 191, 1) 100%);
              }
              
              
              .cont_central {
                  position: absolute;
                  width: 100%;
                  top: 50%;
                  margin-top: -200px;
              }
              
              .cont_modal {
                  position: relative;
                  width: 300px;
                  height: 400px;
                  transition: all 0.5s;
                  transition-delay: 0.7s;
                  transition-delay: 0.7s;
              }
              
              .cont_photo {
                  position: relative;
                  width: 300px;
                  height: 440px;
                  overflow: hidden;
                  background-color: #eee;
                  border-radius: 5px;
                  top: -20px;
                  float: left;
                  z-index: 2;
                  transition: all 0.5s;
                  box-shadow: 1px 1px 20px -5px rgba(0, 0, 0, 0.5);
              }
              
              .cont_img_back {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
                  border-radius: 5px;
              }
              
              .cont_img_back>img {
                  width: 100%;
                  opacity: 0.7;
                  transition: all 1s;
              }
              
              .cont_img_back:hover>img {
                  transform: rotate(15deg) scale(1.5);
              }
              
              .cont_text_ingredients {
                  position: absolute;
                  width: 0px;
                  top: 0px;
                  left: 290px;
                  margin-left: 10px;
                  height: 400px;
                  float: left;
                  border-radius: 5px;
                  z-index: 3;
                  box-shadow: 1px 1px 20px -5px rgba(0, 0, 0, 0.2);
                  background: rgb(251, 249, 249);
                  background: linear-gradient(135deg, rgba(251, 249, 249, 1) 28%, rgba(232, 234, 237, 1) 100%);
                  transition: .7s all ease;
                  transition-delay: 0.7s;
              }
              
              .cont_mins {
                  position: relative;
                  float: left;
                  width: 100%;
                  margin-bottom: 15px;
                  margin-top: 10px;
              }
              
              .sub_mins {
                  position: relative;
                  width: 60px;
                  height: 50px;
                  border-radius: 10px;
                  opacity: 0;
                  transition: .5s all cubic-bezier(0.50, 1.35, 0.50, 1.35);
                  transition-delay: 0.5s;
                  background: linear-gradient(to right, #f42e78, #c17afc);
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  color: #f5f4f5;
                  margin-left: -60px;
              }
              
              .sub_mins>h3 {
                  font-size: 24px;
              }
              
              .sub_mins>span {
                  font-size: 9px;
                  font-weight: 400;
              }
              
              .cont_servings {
                  position: relative;
                  width: 60px;
                  height: 50px;
                  border-radius: 10px;
                  opacity: 0;
                  transition: .5s all cubic-bezier(0.50, 1.35, 0.50, 1.35);
                  transition-delay: 0.7s;
                  background: linear-gradient(to right, #efbad3, #a2f4f2);
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  color: #8447ff;
                  margin-left: -60px;
              }
              
              .cont_servings>h3 {
                  font-size: 20px;
              }
              
              .cont_servings>span {
                  font-size: 9px;
                  font-weight: 400;
              }
              
              .cont_icon_right {
                  position: relative;
                  float: right;
                  margin-top: 16px;
              }
              
              .cont_icon_right>a {
                  margin: 16px;
                  margin-top: 16px;
                  color: #fff;
              }
              
              .cont_detalles {
                  position: absolute;
                  bottom: -185px;
                  height: 200px;
                  border-radius: 5px;
                  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 68%, rgba(0, 0, 0, 0.65) 100%, rgba(0, 0, 0, 0.65) 101%);
                  width: 100%;
                  transition: all .7s cubic-bezier(0.50, 1.35, 0.50, 1.35);
                  transition-delay: 0.7s;
              }
              
              .cont_detalles>h3 {
                  margin-top: 50px;
                  color: #fff;
                  font-size: 24px;
                  margin-bottom: 12px;
              }
              
              .cont_detalles>p {
                  color: #fff;
                  text-align: left;
                  font-size: 15px;
              }
              
              /* Css Tabs */
              .cont_tabs {
                  position: relative;
                  float: left;
                  width: 410px;
                  height: 60px;
                  border-bottom: 3px solid #EDEDEC;
              }
              
              .cont_tabs>ul {
                  width: 300px;
                  background-color: #eee;
              }
              
              .cont_tabs>ul>li {
                  position: relative;
                  float: left;
                  width: 50%;
                  list-style: none;
              }
              
              .cont_tabs>ul>li>a {
                  border-top-style: solid;
                  border-width: 7px;
                  position: relative;
                  display: block;
                  float: left;
                  padding-top: 15px;
                  color: #241C3E;
                  text-decoration: none;
                  margin-left: 15px;
                  border-top: 7px solid #CF95E1;
              }
              
              .cont_tabs>ul>li:first-child>a {
                  border-top: 0px;
                  margin-top: 8px;
                  color: #9A96A4;
                  transition: all 0.2s;
              }
              
              .cont_tabs>ul>li:first-child>a:hover {
                  border-top: 7px solid #ED346C;
                  padding-top: 15px;
                  color: #241C3E;
                  margin-top: 0px;
              }
              
              .cont_btn_open_dets {
                  position: absolute;
                  right: -15px;
                  top: 50%;
              }
              
              .cont_btn_open_dets>a {
                  display: block;
                  width: 30px;
                  height: 30px;
                  background-color: #ED2460;
                  border-radius: 5px;
                  color: #fff;
                  box-shadow: 0px 0px 20px -2px rgba(237, 36, 96, 1);
                  transition: all 0.5s;
                  transform: rotate(180deg);
                  text-align: center;
              }
              
              
              .cont_btn_open_dets>a>i {
                  line-height: 30px;
              }
              
              .cont_title_preparation {
                  position: relative;
                  float: left;
                  margin: 5px 0px;
                  width: 410px;
              }
              
              .cont_title_preparation>p {
                  font-weight: 700;
                  font-size: 14px;
                  margin-left: 40px;
                  text-align: left;
                  color: #36354E;
              }
              
              .cont_info_preparation {
                  width: 100%;
                  position: relative;
                  float: left;    
              }
              
              .cont_info_preparation iframe{
                  width: 81%;
                  height: 100%;
                  padding: 2px 0;
                  margin-left: 50px;
                  border-radius: 10px;
              }
              
              .cont_info_preparation>p {
                  margin: 5px 0px;
                  margin-left: 50px;
                  border-left: 2px solid #E3E3E3;
                  font-size: 12px;
                  padding: 2px 0px;
                  padding-left: 10px;
                  text-align: justify;
                  padding-right: 30px;
                  color: #565656;
              }
              
              .cont_btn_mas_dets {
                  position: absolute;
                  bottom: 0px;
                  left: 50%;
              }
              
              .cont_btn_mas_dets>a {
                  color: #36354E;
              }
              
              .cont_over_hidden {
                  position: relative;
                  float: left;
                  width: 100%;
                  height: 400px;
                  overflow: hidden;
              }
              
              .cont_text_det_preparation {
                  position: relative;
                  width: 410px;
              }
              
              .cont_modal_active>.cont_text_ingredients>.cont_btn_open_dets>a {
                  transform: rotate(0deg);
              }
              
              .cont_modal_active>.cont_text_ingredients {
                  width: 410px;
                  left: 285px;
                  z-index: 1;
                  box-shadow: 15px 20px 70px -5px rgba(0, 0, 0, 0.2);
              }
              
              .cont_modal_active {
                  width: 700px;
              }
              
              .cont_modal_active>.cont_photo {
                  box-shadow: 25px 10px 70px -5px rgba(0, 0, 0, 0.3);
              }
              
              .cont_modal_active>.cont_photo>.cont_mins>.sub_mins {
                  opacity: .9;
                  margin-left: 20px;
              }
              
              .cont_modal_active>.cont_photo>.cont_servings {
                  opacity: .9;
                  margin-left: 20px;
              }
              
              .cont_modal_active>.cont_photo>.cont_detalles {
                  bottom: 0px;
                  padding: 0 15px;
              }
      `}
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

export default Cook;
