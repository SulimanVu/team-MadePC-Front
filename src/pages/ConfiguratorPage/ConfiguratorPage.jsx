import React, { useEffect } from "react";
import styles from "./configuratorPage.module.scss";
import proc from "./images/proc.svg";
import fan from "./images/fan.svg";
import ram from "./images/ram.svg";
import rub from "./images/rub.svg";
import mask from "./images/configurator-mask.svg";
import ArrayDrop from "../../components/ArrayDrop/ArrayDrop";
import { useDispatch, useSelector } from "react-redux";
import { addMadeRequest } from "../../features/requestMadeSlice";
import { addToBasket } from "../../features/applicationSlice";
import { fetchmadePC } from "../../features/madePCSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConfiguratorPage = () => {
  const components = [
    {
      title: "Процессор",
      image: proc,
    },
    {
      title: "Охлаждение",
      image: fan,
    },
    {
      title: "Материнская плата",
      image: proc,
    },
    {
      title: "Оперативная память",
      image: ram,
    },
    {
      title: "Процессор",
      image: proc,
    },
    {
      title: "Видеокарта",
      image: proc,
    },
  ];
  const notify = () =>
    toast("Вы не зарегистрировангы и не можете оставиь заявку", {
      type: "error",
    });

  const dispatch = useDispatch();
  const token = useSelector((state) => state.application.token);
  const summa = useSelector((state) => state.madePC.savePrice);
  const id1 = useSelector((state) => state.application.id);
  const computers = useSelector((state) => state.madePC.madePC);
  const mPC = useSelector((state) => state.madePC.id);

  // let pc = useSelector((state) => state.madePC.madePC.slice(-1));
  // console.log(computers.slice(-1)[0]._id);

  const handleBuy = (e) => {
    // dispatch(addToBasket({ computersId: computers.slice(-1)[0]._id, id1 }));
    if (token) {
      dispatch(addMadeRequest({ basket: mPC }));
    } else {
      notify();
    }
  };
  useEffect(() => {
    dispatch(fetchmadePC());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.configurator_block}>
        <div className={styles.configurator_left}>
          {components.map((item, index) => {
            return (
              <div key={index} className={styles.configurator_components_left}>
                <div>
                  <img src={item.image} alt="#" />
                </div>
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.configurator_center}>
          <ArrayDrop />
        </div>
        <div className={styles.configurator_rigth}>
          <div className={styles.configurator_input}>
            <input type="text" placeholder="Поиск конфигурации по номеру" />
          </div>
          <div className={styles.configurator_comp}>
            <img src={mask} alt="#" />

            <div className={styles.configurator_price}>
              <div>
                <span>{summa}</span>
              </div>
              <div>
                <img src={rub} alt="#" />
              </div>
            </div>
            <div className={styles.configurator_btn}>
              <button onClick={(e) => handleBuy(e)}>Добавить в корзину</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ConfiguratorPage;
