import App, { Container } from 'next/app'
import Head from 'next/head'

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <style global jsx>{`
          body {
            background: rgba(0, 0, 0, 0.08);
            color: rgba(0, 0, 0, 0.8);
            margin: 0;
            -webkit-font-smoothing: auto;
          }

          h4.MuiTypography-h4 {
            font-family: Montserrat;
          }

          h5.MuiTypography-h5 {
            font-weight: 300;
          }
        `}</style>

        <Head>
          <title>Orlando Ureta - Senior Software Developer</title>

          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat:300&display=swap' />

          <script type='text/javascript'>{`
            window.$crisp=[];window.CRISP_WEBSITE_ID="d9376895-0c26-4291-810c-b073cbc3f8fe";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
          `}</script>
        </Head>

        <AppBar position='static' style={{ display: 'none' }}>
          <Toolbar>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>
              About
            </Typography>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </Container>
    )
  }
}
