import React, { Component } from 'react'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import {
  MuiThemeProvider,
  createGenerateClassName
} from '@material-ui/core/styles'
import fs from 'fs'
import path from 'path'
import theme from './src/theme'
import chokidar from 'chokidar'
import { reloadRoutes } from 'react-static/node'

chokidar.watch('./docs').on('all', () => reloadRoutes())

export default {
  getSiteData: () => ({
    title: 'nervos'
  }),
  getRoutes: async () => {
    const courses = JSON.parse(
      fs.readFileSync(path.resolve('docs/index.json'), 'utf8')
    )
    return [
      {
        path: '/',
        component: 'src/containers/HomeContainer',
        getData: () => ({ courses })
      },
      ...courses.map(course => {
        const episodes = JSON.parse(
          fs.readFileSync(path.resolve(`docs/${course.id}/toc.json`), 'utf8')
        )
        return {
          path: `/${course.id}`,
          component: 'src/containers/CourseContainer',
          getData: () => ({ episodes, course }),
          children: episodes.map(episode => ({
            path: `/${episode.id}`,
            component: 'src/containers/EpisodeContainer',
            getData: () => ({
              course,
              episodes,
              episode,
              markdown: fs.readFileSync(
                path.resolve(`docs/${course.id}/${episode.id}.md`),
                'utf8'
              )
            })
          }))
        }
      }),
      { is404: true, component: 'src/containers/404' }
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    // Create a sheetsRegistry instance.
    const sheetsRegistry = new SheetsRegistry()

    const generateClassName = createGenerateClassName()

    const html = render(
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
          <Comp />
        </MuiThemeProvider>
      </JssProvider>
    )

    meta.jssStyles = sheetsRegistry.toString()

    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
            />
            <title>Learning Nervos</title>
            <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
            <link
              rel="shortcut icon"
              type="image/x-icon"
              href="images/favicon.ico"
            />
            <meta name="description" content="nervos" />
            <meta name="keywords" content="nervos blockchain" />
          </Head>
          <Body>
            {children}
            <style id="jss-server-side">{renderMeta.jssStyles}</style>
          </Body>
        </Html>
      )
    }
  }
}
