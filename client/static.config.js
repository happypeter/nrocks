import React, { Component } from 'react'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import {
  MuiThemeProvider,
  createGenerateClassName
} from '@material-ui/core/styles'
import fs from 'fs'
import theme from './src/theme'
import chokidar from 'chokidar'
import { reloadRoutes } from 'react-static/node'
import config from './config'

const docRepo = config.docRepo
chokidar.watch(`${docRepo}`).on('all', () => reloadRoutes())

function parseFileContent(courseId, fileName) {
  const content = fs.readFileSync(
    `${docRepo}/${courseId}/${fileName.toUpperCase()}.md`,
    'utf8'
  )
  const lines = content.split('\n')
  let obj = {}
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    const reg = /^[*-]\s+\[(.*)\]\((.*)\)$/
    if (reg.test(line)) {
      if (fileName === 'readme') {
        obj[line.replace(reg, '$1')] = line.replace(reg, '$2')
      } else {
        obj[line.replace(reg, '$2').slice(0, -3)] = line.replace(reg, '$1')
      }
    }
  }
  return obj
}

function getCourseToc(courseId) {
  const toc = parseFileContent(courseId, 'summary')
  const videos = parseFileContent(courseId, 'readme')
  const keys = Object.keys(toc)
  const list = []
  for (let i = 0; i < keys.length; i++) {
    const id = keys[i]
    const data = { id, title: toc[id] }
    if (videos && videos[id]) {
      data.video = videos[id]
    }
    list.push(data)
  }
  return list
}

export default {
  getSiteData: () => ({
    title: 'nervos'
  }),
  getRoutes: async () => {
    const courses = JSON.parse(fs.readFileSync(`${docRepo}/index.json`, 'utf8'))
    return [
      {
        path: '/',
        component: 'src/containers/HomeContainer',
        getData: () => ({ courses })
      },
      ...courses.map(course => {
        const episodes = getCourseToc(course.id)
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
                `${docRepo}/${course.id}/${episode.id}.md`,
                'utf8'
              )
            })
          }))
        }
      }),
      { is404: true, component: 'src/components/NotFound' }
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
            <meta name="keywords" content="Nervos Blockchain Crypto DApp" />
            <link
              rel="stylesheet"
              href="//cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
            />
          </Head>
          <Body>
            {children}
            <style id="jss-server-side">{renderMeta.jssStyles}</style>
            <script
              type="text/javascript"
              src="//cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
            />
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=UA-126744557-1"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-126744557-1');
                `
              }}
            />
          </Body>
        </Html>
      )
    }
  }
}
