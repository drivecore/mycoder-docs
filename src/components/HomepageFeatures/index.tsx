import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import SVG images
import MountainSvg from '@site/static/img/undraw_docusaurus_mountain.svg';
import TreeSvg from '@site/static/img/undraw_docusaurus_tree.svg';
import ReactSvg from '@site/static/img/undraw_docusaurus_react.svg';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Coding Assistant',
    Svg: MountainSvg,
    description: (
      <>
        MyCoder leverages advanced AI models to understand your requirements
        and generate high-quality code solutions in multiple programming languages.
      </>
    ),
  },
  {
    title: 'Context-Aware Responses',
    Svg: TreeSvg,
    description: (
      <>
        MyCoder understands your project structure and existing code, providing
        solutions that integrate seamlessly with your codebase.
      </>
    ),
  },
  {
    title: 'Built for Developers',
    Svg: ReactSvg,
    description: (
      <>
        Designed with developer workflows in mind, MyCoder integrates with your
        terminal, code editor, and development environment.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
