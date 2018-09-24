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
import { docRepo } from './config'
import { PauseCircleFilled } from '@material-ui/icons'

chokidar.watch(`./${docRepo}`).on('all', () => reloadRoutes())

function parseFileContent(courseId, fileName) {
  const content = fs.readFileSync(
    `./${docRepo}/${courseId}/${fileName.toUpperCase()}.md`,
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
    list.push({
      id,
      title: toc[id],
      video: videos[id]
    })
  }
  return list
}

export default {
  getSiteData: () => ({
    title: 'nervos'
  }),
  getRoutes: async () => {
    const courses = JSON.parse(
      fs.readFileSync(`./${docRepo}/index.json`, 'utf8')
    )
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
                `./${docRepo}/${course.id}/${episode.id}.md`,
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
