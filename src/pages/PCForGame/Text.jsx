import React from 'react';
import styles from "./PCForGame.module.scss"


const Text = ({button}) => {
    return (
        <div className={styles.title_page_hidd} style={{display: (button ? "block" : "none")}}>
            <h2 className={styles.title_page_h2}>ПК под любимую игру</h2>
        <p>
             Компьютерные игры развиваются со скоростью стремительного водопада или горной лавины. В эту популярную сферу развлечений вовлечены уже миллионы людей во всем мире. И количество любителей виртуальных баталий только нарастает. А ведь полстолетия назад многие из нас даже не слышали о таких программах. Да и сами игры были достаточно примитивными, еще не набрали солидной мышечной массы.
        </p>
        <p>
             Мощный импульс для развития они получили в девяностые годы прошлого века, когда стали, трехмерными. Реалистичная графика способствовала появлению новых игровых жанров. Появились шутеры от первого лица (Doom) и стратегии в реальном времени (Dune II). В XXI веке трехмерная графика достигла невероятно широкого распространения, а компьютерные игры приобрели массовый характер. Ими стали увлекаться люди всех возрастов и профессий. Такому невероятному буму способствовало быстрое развитие интернета и социальных сетей.
        </p>
        <p>
             Сегодня игры класса ААА, требующие от разработчиков колоссальных бюджетных затрат, стремительно захватывают рынок, будоражат сердца поклонников. Естественно, что под их футуристические задачи нужны мощные игровые ПК.
        </p>
        <h3 className={styles.title_page_h3}>Варианты от экспертов</h3>
        <p>
             На этой странице вы можете подобрать игровой ПК под самые популярные компьютерные игры:
        </p>
        <ul className={styles.text_list}>
            <li>Cyberpunk 2077;</li>
            <li>PUBG;</li>
            <li>World of Tanks;</li>
            <li>DOTA 2;</li>
            <li>Minecraft;</li>
            <li>Fortnite и многие другие.</li>
        </ul>
        <p>
             Сам процесс простой и приятный: выбираете игру и сразу получаете список компьютеров, которые рекомендуют специалисты EDELWEISS.
        </p>
        <p>
             Например, вы являетесь страстным поклонником онлайн-шутера Warface, поэтому под любимую игру желаете купить соответствующий ПК. Поскольку в этой игре вас ждет много ярких сражений, потребуется видеокарта экстра-класса. Желательно, не слабее GeForce RTX 3070. Процессор Intel Core i5 с задачами справится, но лучше взять классом выше. Рекомендуемый жесткий диск – 2 Тб Western Digita. И так по всем основным компонентам.
        </p>
        <p>
             Вы можете воспользоваться и конфигуратором сайта, но быстрее и удобнее заказать готовую сборку, которую тщательно подобрали наши эксперты.
        </p>
        <p>
             Так, под игру Warface они предлагают следующие модели:
        </p>
        <ul className={styles.text_list}>
            <li>EDELWEISS VILLAIN – 53 380 рублей;</li>
            <li>EDELWEISS CS:GO – 85 150 рублей;</li>
            <li>EDELWEISS ZVEROBOY – 102 340 рублей;</li>
            <li>EDELWEISS ARMOR – 134 980 рублей.</li>
        </ul>
        <p>
             Как видите, цены на машины значительно разнятся, поскольку мы стараемся учитывать материальные возможности каждого геймера.
        </p>
        <h3 className={styles.title_page_h3}>Наши принципы</h3>
        <p>
             Такой же алгоритм выбора ПК заложен под каждую игру. Поэтому, если вы страстный поклонник конкретного шутера или симулятора, этот раздел для вас. Естественно, что любой компьютер, который вы приобретете в студии EDELWEISS, верно будет служить вам и в других сражениях.
        </p>
        <p>
             Что касается наших принципов при выборе игрового ПК, то всегда советуем приобретать железо на перспективу, с запасом. Во-первых, вы сразу почувствуете прелесть игры за лучшим современным компьютером. Во-вторых, не станете заморачиваться по поводу апгрейда или новой машины лет 5-7. В-третьих, сэкономите свои деньги.
        </p>
        <p>
             Это действительно так, поскольку ваши инновационные вложения будут работать гораздо дольше обычных. Вспомните известный афоризм Ротшильда: «Я не настолько богат, чтобы покупать дешевые вещи».
        </p>
        <p>
             Успешных вам сражений с компьютерами от EDELWEISS!
        </p></div>
    );
};

export default Text;