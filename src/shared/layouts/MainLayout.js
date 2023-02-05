import Head from 'next/head';
import PropTypes from 'prop-types';

import { Header } from '../components';

export const MainLayout = ({ children, title, showHeaderButton, mainStyles = "" }) => {
  return (
    <>

      <Head>
        { title && <title>{ title }</title> }
      </Head>

      <Header showHeaderButton={ showHeaderButton } />

      <main className={`main ${mainStyles}`}>
        { children }
      </main>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  showHeaderButton: PropTypes.bool,
  mainStyles: PropTypes.string
};
