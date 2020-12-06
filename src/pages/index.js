import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'COVID-19 and the pandemic',
    imageUrl: '../assets/world.svg',
    description: (
      <>
       The December 2019 outbreak of a novel respiratory virus, SARS-CoV-2, has become an ongoing
global pandemic due in part to the challenge of identifying symptomatic, asymptomatic and presymptomatic carriers of the virus.
      </>
    ),
  },
  {
    title: 'CRISPR-based diagnostics',
    imageUrl: '../assets/dna.svg',
    description: (
      <>
        We utilize RNA and DNA-targetinga
enzymes can augment gold-standard PCR-based testing which can be made rapid, portable and
accurate.
      </>
    ),
  },
  {
    title: 'Web App to explain our process and reasonings',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        This website (or Web App to be more precise) is meant to be a supplementary addition to our submitted project, which contains our data, calculations,
        sample images, and explaination for all of our steps in the final project. It is written in a language called React, which is derived from JavaScript(JSX).
        It contains elements of the HTML, CSS and JS language base.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={``}
      description="Final Project ChemBE MEB (Fall 2020) - BlueJayChemBE (Aayush Gandhi, Jimmy Hu, Mia Grahn)">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              View Our Project
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
