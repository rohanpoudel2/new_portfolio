import Image from "next/image";
import styles from "./page.module.scss";
import ArticleImage from "@/../public/images/article.jpeg"
import Sidebar from "@/components/sidebar/Sidebar";

const Article = () => {
  return (
    <div className={styles.article}>
      <div className={styles.top}>
        <div className={styles.category}>
          NFT
        </div>
        <h1 className={styles.title}>
          Drinking Coffee made me a better developer.
        </h1>
        <h2 className={styles.subTitle}>
          Does drinking coffee increase your productivity?
        </h2>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={ArticleImage}
          alt="Article Image"
          className={styles.image}
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, has in dicta constituam, at adhuc commodo aperiri eam. Ei ius prima erroribus honestatis, cu electram forensibus scribentur vel, id vix ferri deseruisse. Cu his homero animal habemus, sed ad assum audire. Mea mazim feugait abhorreant cu. Putent utamur ullamcorper mel te, nec ad altera commodo.
            <br />
            <br />
            Te atqui ullum eleifend usu. Est eu utamur fastidii, has te nihil adolescens. Et vel paulo ponderum. Id prompta voluptua suavitate vim, eam quem tractatos ei. Molestie percipit cu nec, te est inermis admodum consectetuer.
            <br />
            <br />
            Eu recteque scriptorem liberavisse pro, ipsum tritani placerat id cum. Ut diceret conceptam contentiones vel, quem voluptaria conclusionemque ea quo. Ex eleifend philosophia his, ius ad tale electram referrentur. Qui fugit efficiendi no, cu cum solet complectitur. Has utroque noluisse an. Te munere nemore legimus pro, mei te veniam animal. Est an ullum petentium salutatus.
            <br />
            <br />
            Eum ut inimicus patrioque. Simul suavitate in pro, tota dolor temporibus has no, nec ex sale utroque. Laoreet tacimates mnesarchum at est, sed quas nemore cu. Ei feugait complectitur nam, no cum meliore argumentum, incorrupte definitiones quo et. Ei sed nostro vituperatoribus. At per discere recusabo patrioque, electram expetenda patrioque sea ei.
            <br />
            <br />
            Sit ut iisque iracundia elaboraret. Ferri temporibus has id. Eam ut sonet audire. Quod alienum ad sea, qui no quod mazim mnesarchum. Id etiam nonumy platonem qui. Ea eros eligendi suavitate duo.
            <br />
            <br />
            Lucilius scripserit mel ad. Tota accusata moderatius ad vim, usu at dolor liberavisse definitionem, his iisque menandri molestiae ea. Vivendum forensibus id est, et usu placerat expetenda necessitatibus. Unum case id sit, sed graecis assentior ea, nominavi liberavisse ad duo. Ei quo doming accusam gloriatur, sit an brute efficiendi. Nisl vocibus ceteros an pri.
            <br />
            <br />
            Qui alia appareat tincidunt te, nullam elaboraret ad mea. Eu case summo dicam vim, diam melius mei ei. Eum choro iisque abhorreant an, probo minim habemus nam te, deleniti antiopam erroribus in qui. Eu duo novum quaeque luptatum, nec aliquip oportere an. Cum porro audiam nusquam te, duis atomorum molestiae nam ex.
            <br />
            <br />
            Temporibus instructior cum ex, facer audire vituperatoribus ea qui. Ne efficiantur intellegebat mei, eu mea prima inermis, cu mea vivendum explicari. Eu sit ipsum vituperatoribus, vel autem dicta eu, sit eu quem graeco insolens. Detracto sententiae nam an, ei equidem voluptaria sed. Id vix sanctus laoreet. Cu quot interpretaris vel, officiis consequuntur reprehendunt id eam. Eum ullum quodsi platonem ea, no sea habemus minimum, mea illud aperiri id.
            <br />
            <br />
            Ut harum scripta efficiendi quo, eos ex quodsi definitionem. Delicata efficiendi ei cum. Inani liber necessitatibus eu eum, tale oblique gubergren nec ut. Vis cu fierent intellegat elaboraret. Usu duis inani ei. Facer impetus ex usu, quo reque graecis eu, noster omnesque eu has. Splendide aliquando adipiscing et usu, mei fierent referrentur no.
            <br />
            <br />
            Mel te suscipit interpretaris, alienum delectus scribentur nam ad, autem invidunt efficiendi ut usu. Qui ad nostro minimum assueverit. Stet antiopam no nec, stet error civibus ei eum. Integre consectetuer sit ad, aeque placerat deserunt ne sea, in duo vide partem tractatos. Sed ex iisque menandri concludaturque, id commodo ponderum prodesset mel, ea habeo iracundia vim. Vim at everti molestie.
          </p>
        </div>
        <div className={styles.right}>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Article