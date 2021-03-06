import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import * as meshline from 'threejs-meshline'
import { Canvas, useLoader, useFrame, useThree, extend } from 'react-three-fiber'
extend(meshline)

function Fatline({ curve, width, color, speed }) {
  const material = useRef()
  useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
  return (
    <mesh>
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial
        ref={material}
        transparent
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.2}
        dashRatio={0.8}
      />
    </mesh>
  )
}

function Lines({ count, colors }) {
  const lines = useMemo(
    () =>
      new Array(count).fill().map(() => {
        const pos = new THREE.Vector3(10 - Math.random() * 20, 10 - Math.random() * 20, 10 - Math.random() * 20)
        const points = new Array(30)
          .fill()
          .map(() =>
            pos.add(new THREE.Vector3(4 - Math.random() * 8, 4 - Math.random() * 8, 2 - Math.random() * 4)).clone()
          )
        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
        return {
          color: colors[parseInt(colors.length * Math.random())],
          width: Math.max(0.1, 0.35 * Math.random()),
          speed: Math.max(0.0001, 0.0005 * Math.random()),
          curve,
        }
      }),
    [colors, count]
  )
  return lines.map((props, index) => <Fatline key={index} {...props} />)
}

function Rig({ mouse }) {
  const { camera } = useThree()
  useFrame(() => {
    camera.position.x += (mouse.current[0] / 50 - camera.position.x) * 0.05
    camera.position.y += (-mouse.current[1] / 50 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })
  return null
}
const features = [
  {
    title: 'COVID-19 and the pandemic',
    imageUrl: 'img/world.svg',
    description: (
      <>
       The December 2019 outbreak of a novel respiratory virus, SARS-CoV-2, has become an ongoing
global pandemic due in part to the challenge of identifying symptomatic, asymptomatic and presymptomatic carriers of the virus.
      </>
    ),
  },
  {
    title: 'CRISPR-based diagnostics',
    imageUrl: 'img/dna.svg',
    description: (
      <>
        We utilize RNA and DNA-targetinga
enzymes can augment gold-standard PCR-based testing which can be made rapid, portable and
accurate. The novel approach described in our project skips all the conversion and amplification steps of traditional RT-PCR, using CRISPR to directly detect the viral RNA.
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
  const mouse = useRef([0, 0])
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
      <Canvas
      style={{ background: '#ffc9e7' }}
      camera={{ position: [0, 0, 10], fov: 25 }}
      onMouseMove={(e) => (mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2])}
    >
      <Lines count={100} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
      <Rig mouse={mouse} />
    </Canvas>
      
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
