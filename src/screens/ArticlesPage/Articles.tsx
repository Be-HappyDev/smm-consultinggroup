/* eslint-disable @next/next/no-img-element */
"use client";
import { Grid, Typography } from "@mui/material";
import styles from "./Articles.module.css";
import { Container } from "@mui/system";

export const ArticlesPage = () => {
  return (
    <Container maxWidth="xl">
      <div className={styles.page}>
        <Typography
          variant="h2"
          component={"h2"}
          sx={{
            marginBottom: "20px",
          }}
        >
          Articles
        </Typography>
        <div className="articles">
          <Grid container>
            <Grid className={styles.articleBlock} item xs={12}>
              <div className={styles.articleTop}>
                <div className={styles.articleTitle}>
                  <Typography variant="body2" component={"h5"}>
                    Orenburg student invented ultrasonic glasses for the blind.
                    for the blind.
                  </Typography>
                </div>
                <div className={styles.articleDate}>
                  <Typography variant="body2" component={"p"}>
                    Date: 16 April, 2014
                  </Typography>
                </div>
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleFullDesc}>
                  <Typography variant="body2" component={"p"}>
                    The device based on ultrasonic sensors enables a visually
                    impaired person to navigate in space without errors. The
                    range of the device is 5 meters: if the user encounters
                    objects at this distance, the device notifies him about it.
                    The closer the obstacle - the more active the signal. The
                    developer herself - Maira Suyunysheva, a student of the
                    Economics Department of the Orenburg State Agrarian
                    University, assures that the cost of the gadget will be an
                    order of magnitude cheaper than imported analogs. So far we
                    have produced a prototype of our iSee glasses. We want to
                    apply for a patent for software for them. With the launch in
                    series the price of the device will be 4 thousand rubles,
                    while similar foreign devices cost from 100 thousand rubles,
                    - said Maira. This year took part in the All-Russian youth
                    intonation contest {'"'}
                    Umnik{'"'}, conducted by the Foundation for Assistance to
                    Small Innovative Enterprises. The opportunity to test {'"'}
                    iSee glasses{'"'} was possible for some people . -A visually
                    impaired person was interested in our development. We
                    offered him to test our glasses and he was very satisfied
                    with the result,{'"'} said the girl. Maira has been
                    attending classes at the club of young innovators at the
                    university for a number of years. According to the student,
                    the desire to help people made her start working in the
                    field of medicine. - Students of different specialties,
                    including students from other universities, are involved in
                    our club. We have created a whole line of projects that can
                    be applied in medicine. Each development is a product of
                    collective creativity,{'"'} Samat Taspayev, Maira{"'"}s
                    scientific supervisor, explained to RG. - As for {'"'}iSee
                    glasses{'"'}, their significant reduction in price compared
                    to foreign analogs was achieved by cutting off unnecessary
                    functionality: imported glasses are mainly game-oriented and
                    serve fans to immerse themselves in virtual reality. And our
                    development is designed to help blind people. In the
                    meantime, we are working on the improvement of the novelty -
                    it is planned to add a built-in video camera to the glasses,
                    which will enable family and friends to monitor the
                    movements of the visually impaired person using a computer,
                    in order to come to his aid if necessary.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid className={styles.articleBlock} item xs={12}>
              <div className={styles.articleTop}>
                <div className={styles.articleTitle}>
                  <Typography variant="body2" component={"h5"}>
                    The Future of Information Technology and Artificial
                    Intelligence: Helping Business Growth
                  </Typography>
                </div>
                <div className={styles.articleDate}>
                  <Typography variant="body2" component={"p"}>
                    Date: 10 November 2021
                  </Typography>
                </div>
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleFullDesc}>
                  <Typography variant="body2" component={"p"}>
                    Information Technology (IT) and Artificial Intelligence (AI)
                    are playing an increasingly important role in today{"'"}s
                    world, and their impact on the business sector is becoming
                    more evident every year. Advanced IT and AI technologies
                    offer huge potential for business growth and development in
                    the future. One of the main reasons for this is the ability
                    to automate routine operations and improve the efficiency of
                    business processes. Many companies have already started
                    using automation and robotization to perform complex tasks
                    previously performed by humans. This can reduce errors,
                    increase productivity, and cut costs. AI will also be able
                    to greatly improve the way data is used to make business
                    decisions. Big data can be analyzed and used to identify
                    trends, predict markets, and determine customer needs. This
                    will help businesses make more informed and strategic
                    decisions, which will positively impact their growth and
                    competitiveness. Another promising area for the future of IT
                    and AI is the development of chatbots and virtual
                    assistants. These technologies are already being used in
                    many areas to provide customers with fast and quality
                    support and assistance in choosing a product or service.
                    They create a unique communication channel and can be
                    customized to perform specific tasks according to business
                    needs. In the future, AI will also be able to help create
                    personalized recommendations and suggestions for customers.
                    By knowing each customer{"'"}s preferences, AI will be able
                    to suggest ideal products or services, which will create a
                    better user experience and consequently increase customer
                    commitment. However, the development of IT and AI also
                    brings a number of challenges and potential risks for
                    businesses. Data security and information privacy looms
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};
